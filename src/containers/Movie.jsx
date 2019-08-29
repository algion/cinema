import React, {Component} from 'react';
import {connect} from "react-redux";

import {InfoBlock} from "../components";
import {Link} from "react-router-dom";
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
        let buttonGetSchedule = "";
        if (movie.actorsWiki !== "1") {
            buttonGetSchedule = <Link to="/schedule"><div className="btn-buy">Выбрать сеанс</div></Link>;
        } else {buttonGetSchedule = <span/>}

        return (
            <div className="movie-page">
                <h1 className="movie-title">{movie.title}</h1>
                <div className="movie-info">
                    <div className="poster">
                        <img src={movie.poster} alt="poster"/>
                        {buttonGetSchedule}
                    </div>
                    <div>
                        <InfoBlock
                            title="Актёры:"
                            content={movie.actors ? actors : ""}
                        />

                        <InfoBlock
                            title="Жанр:"
                            content={movie.genre ? genre : ""}
                        />

                        <InfoBlock
                            title="Страна:"
                            content={movie.country ? countries : ""}
                        />
                        <InfoBlock
                            title="Год:"
                            content={movie.year}
                        />

                        <InfoBlock
                            title="Язык:"
                            content={movie.language}
                        />

                        <InfoBlock
                            title="Возраст:"
                            content={movie.age ? `${movie.age}+`: "нет возрастных ограничений"}
                        />
                        <InfoBlock
                            title="Описние:"
                            content={movie.description}
                        />
                        <InfoBlock
                            title="Трейлер:"
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

