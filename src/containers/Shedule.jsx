import React from "react"
import { connect } from "react-redux";

import { getSessions } from "../actions";
// import {dateOptions} from "../constants";
import { DateBlock } from "../components";

class Schedule extends React.Component {
    componentDidMount() {
        this.props.getSessions();
    }

    render() {
        const { sessions } = this.props;
        return <div className="schedule">
            {
                sessions.map((item, i) => (
                    <DateBlock key={i} moviesOnDate={item} />
                    )
                )
            }
        </div>

    }
}
const mapStateToProps = (state) => ({
    sessions: state.schedule.sessions
});
const mapDispatchToProps = {
    getSessions
};
export const ScheduleContainer = connect(mapStateToProps, mapDispatchToProps) (Schedule);