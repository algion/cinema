import React, { useState } from "react";
import {Link} from "react-router-dom";

import { ModalBuyTicket } from "./ModalBuyTicket";
import { SessionInfo } from "./SessionInfo";

export const MovieSession = ({ session }) => {
    const [showModal, setShowModal] = useState(false);
    const toggleShowModal = () => {
        setShowModal(!showModal);
    };
    const MAX_LENGTH = 350;
    return (
        <React.Fragment>
            <div className="movie-session">
                <div className="movie-info">
                    <div className="ticket-info">
                        <div className="sb">
                            <Link to={`movie/${session.movie._id}`}>
                            <h3>{session.movie.title}</h3>
                            </Link>
                            {/*<h2>Price: {session.movie._id}</h2>*/}
                        <SessionInfo room={session.room} date={session.date} cost={session.costs}/></div>
                        <div className="btn-buy" onClick={toggleShowModal}>Buy ticket</div>
                    </div>
                </div>
                <div className="session-desc">
                    {session.movie.description.length > MAX_LENGTH ?
                        (
                            <div >
                                {`${session.movie.description.slice(0, MAX_LENGTH)}...   `}
                                <Link to={`movie/${session.movie._id}`}>Read more</Link>
                            </div>
                        ) :
                        <p>{session.movie.description}</p>
                    }
                </div>
            </div>
            {showModal && <ModalBuyTicket session = {session} handleCloseModal={toggleShowModal} />}
        </React.Fragment>

    );
};
