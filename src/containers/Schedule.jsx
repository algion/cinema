import React from "react";
import { connect } from "react-redux";
import { Spin, Icon } from 'antd';
import { getSessions } from "../actions";
import { SessionsBlock } from "../components";
import {dateOptions} from "../constants";

class Schedule extends React.Component {
    componentDidMount() {
        this.props.getSessions();
    }
    getSessions =() => {
        const {movies, sessions, rooms} = this.props;
        const sessionArr = movies.length && sessions.length && rooms.length ? sessions.map(item => {
            return item.map(elem => ({
                ...elem,
                room: rooms.find(room => room._id === elem.room).name,
                movie: movies.find(movie => movie._id === elem.movie)
            }))
        }) : [];

        return sessionArr.map( item => {
            return item.filter(elem => elem.movie);
        });
    };

    render() {
        const { isLoading } = this.props;

        if (isLoading) {
            return  <Spin
                indicator={<Icon
                    type="loading-3-quarters"
                    style={{ fontSize: 80 }}
                    spin />
                }
            />
        }
        return (
            <React.Fragment>
            <div className="right-side">

                    <div className="month">
                        <ul>
                            <li>
                                April&nbsp;
                                <span className="fz">2019</span>
                            </li>
                        </ul>
                    </div>

                    <ul className="weekdays">
                        <li>Пн</li>
                        <li>Вт</li>
                        <li>Ср</li>
                        <li>Чт</li>
                        <li>Пт</li>
                        <li>Сб</li>
                        <li>Вс</li>
                    </ul>

                    <ul className="days">
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>
                        <li>8</li>
                        <li>9</li>
                        <li>10</li>
                        <li>11</li>
                        <li>12</li>
                        <li>13</li>
                        <li>14</li>
                        <li>15</li>
                        <li>16</li>
                        <li className="true"><a href="#0"><span>17</span></a></li>
                        <li className="true"><a href="#1"><span>18</span></a></li>
                        <li className="true"><a href="#2"><span>19</span></a></li>
                        <li className="true"><a href="#3"><span>20</span></a></li>
                        <li className="true"><a href="#4"><span>21</span></a></li>
                        <li className="true"><a href="#5"><span>22</span></a></li>
                        <li className="true"><a href="#6"><span>23</span></a></li>
                        <li className="true"><a href="#7"><span>24</span></a></li>
                        <li>25</li>
                        <li>26</li>
                        <li>27</li>
                        <li>28</li>
                        <li>29</li>
                        <li>30</li>
                    </ul>


            </div>
            <div className="schedule">

                {
                   this.getSessions().map((item, i) => (

                        <div className="date-block" key={i} >
                            <div id={i} >
                            <button className="day">{new Date (item[0].date).toLocaleString("ru", dateOptions)}</button>
                            <SessionsBlock moviesOnDate={item}/>
                            </div>
                        </div>

                    ))

                }
            </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => ({
    sessions: state.data.sessions,
    isLoading: state.loading.isLoading,
    movies: state.data.movies,
    rooms: state.data.rooms
});
const mapDispatchToProps = {
    getSessions
};

export const ScheduleContainer = connect(mapStateToProps, mapDispatchToProps)(Schedule);