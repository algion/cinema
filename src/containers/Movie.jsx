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
        const actors = movie.actors ? movie.actors.filter(Boolean).join(", ") : "";
        const genre = movie.genre ? movie.genre.filter(Boolean).join(", ") : "";
        const countries = movie.country ? movie.country.filter(Boolean).join(", ") : "";

console.log("this.state.movie", this.state.movie);
        return (
            <div className="movie-page">
<h1 className="movie-title">{movie.title}</h1>
                <div className="movie-info">
                    <div className="poster">
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

