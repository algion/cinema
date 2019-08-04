 import React from "react";
import { connect } from "react-redux";
 import { Layout } from 'antd';
 import { Switch, Route } from "react-router-dom";

 import { getMovies } from "../actions";

const { Content } = Layout;

export class Main extends React.Component {
    componentDidMount() {
        this.props.getMovies();
    }

    render() {
        return (
    <Content style={{
            padding: '0 50px'
        }}>
        <Switch>
            <Route path={"/"} exact/>
            <Route path={"/movie/:id"}/>
        </Switch>
    </Content>
        )
    }
}

const mapDispatchToProps = {
    getMovies
}

export const MainContainer = connect(null, mapDispatchToProps)(Main);