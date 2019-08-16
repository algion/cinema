import React, {Component} from 'react';
import {connect} from "react-redux";

import {InfoBlock} from "../components";

class Movie extends Component {
    state = {
        movie: {}
    };
    componentDidMount() {
        const { match, movies } = this.props;
        const movieId = match.params.id;
        const movie = movies.find(item => item._id === movieId);

        this.setState( {movie});
    }
    render() {
        const { movie } = this.state;
        const actors = movie.actors ? movie.actors.join(", ").slice(0, -2) : "";
        const genre = movie.genre ? movie.genre.join(", ") : "";
        const countries = movie.country ? movie.country.join(", ") : "";


        return (
            <div className={"movie-page"}>
<h1 className="movie-title">{movie.title}</h1>
                <div className="movie-info">
                    <div>
                        <img src={movie.poster} alt="poster"/>
                        <div className="btn-buy">Buy ticket</div>
                    </div>
                    <div>
                        <InfoBlock
                        title="Actors:"
                        content={movie.actors ? actors : ""}
                        />

                        <InfoBlock
                            title="Genre:"
                            content={movie.genre ? genre : ""}
                        />

                        <InfoBlock
                            title="Country:"
                            content={movie.country? countries : ""}
                        />

                        <InfoBlock
                            title="Language:"
                            content={movie.language}
                        />

                        <InfoBlock
                            title="Age:"
                            content={movie.age ? `${movie.age}+`: "нет возрастных ограничений"}
                        />
                        <InfoBlock
                            title="Description:"
                            content={movie.description}
                        />
                        <InfoBlock
                            title="Trailer:"
                            content={<iframe title="Trailer"
                                width="640px"
                                height="360px"
                                src={movie.trailer}
                            allowFullScreen
                            />}
                        />
                    </div>
                </div>

            </div>
        );
    }

}

const mapStateToProps = (state) => ({
    movies: state.data.movies
});

export const MovieContainer = connect(mapStateToProps)(Movie);

