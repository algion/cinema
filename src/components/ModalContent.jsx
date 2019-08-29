import React from "react";
import { Spin, Icon } from "antd";
import axios from "axios";

import {URL_SPACE_SHADOW} from "../constants";
import { getSortedPlaces, getRowsArray, getRandomAnt } from "../utils";
import { SessionInfo, Places, Form } from "./index";


export class ModalContent extends React.Component {
state = {
    isLoading: true,
    space: [],
    chosenPlace: null,
    showForm: false,
    user: null
};
    componentDidMount() {
        axios.get(`${URL_SPACE_SHADOW}?session=${this.props.session._id}`)
            .then(({ data }) => {
                this.setLoadingDone();
                this.getPlaceArray(data.space);
            })
            .catch((error) => {
                this.setLoadingDone();
                console.error(error);
            });
    }

    setLoadingDone = () => this.setState({ isLoading: false });
    getPlaceArray = (arr) => {
        const sortedByRow = getSortedPlaces(arr,"row");
        const rows = getRowsArray(sortedByRow);
        const rowsSortedByPlace = rows.map(item => {
            return getSortedPlaces(item, "place");
        });
        this.setState({space: rowsSortedByPlace.map((item => {
                const random = getRandomAnt(2,6);
                return (item.map(elem => {
                    if (elem.place % random === 0)
                    {
                        return {
                            ...elem,
                            booked: true
                        }
                    }
                    return elem
                }))
            }))
        });

    };
    handleChosePlace = (data) => {
        this.setState({chosenPlace: data});
    };

    handleOpenForm = () => {
        this.setState( {showForm: true });
    };

    handleClickBy = (data) => {
        this.setState({user: data});
    };

    render(){
        const {isLoading, space, chosenPlace, showForm, user} =  this.state;
        const { session, handleCloseModal } = this.props;
        return(
            <div className="modal-background">
                <div className="modal-content">
                    { isLoading
                   ? <Spin indicator={<Icon type="loading-3-quarters" style={{fontSize: 80}} spin/>}/>
                   : <div>

                            <h2>{session.movie.title}</h2>
                            <SessionInfo room={session.room} date={session.date} cost={session.costs}/>
                            {
                                user
                                ? <div>
                                        <h3>{user.name} спасибо за покупку</h3>
                                    <p> Ваш билет на ряд {chosenPlace.row} место {chosenPlace.place} &nbsp;
                                     был выслан на указанный вами e-mail {user.email}
                                    </p>
                                </div>
                                    : <React.Fragment>
                                        <div className="legend">
                                            <div> <button/><span>  свободные</span></div>
                                            <div> <button/><span>  занятые</span></div>
                                        </div>
                                        <Places space={space} handleChosePlace={this.handleChosePlace}/>
                                        {
                                            chosenPlace &&
                                            <div>
                                                <h2> Выбрано ряд: {chosenPlace.row} место: {chosenPlace.place} </h2>
                                                {
                                                    showForm
                                                        ? <Form handleSubmitForm={this.handleClickBy}/>
                                                        :<div className="btn-buy-place" onClick={this.handleOpenForm}>Оформить билет</div>
                                                }
                                            </div>
                                        }
                                    </React.Fragment>
                            }

                            <span className="btn-close" onClick={handleCloseModal}>
                                <Icon type="close-circle"/>
                            </span>
                    </div>
                    }
                    {/*<h2>Some text</h2>*/}
                </div>

            </div>
        )
    }
}
