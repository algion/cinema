 import React from "react";
 import { connect } from "react-redux";
 import { Layout } from 'antd';
 import { Switch, Route } from "react-router-dom";

 import { getMovies } from "../actions";
 import { MainPageContainer, MovieContainer } from "../containers";

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
            <Route path={"/"} exact component={MainPageContainer}/>
            <Route path={"/movie/:id"} component={MovieContainer}/>
        </Switch>
    </Content>
        )
    }
}

const mapDispatchToProps = {
    getMovies
};

export const MainContainer = connect(null, mapDispatchToProps)(Main);