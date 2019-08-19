 import React from "react";
 import { connect } from "react-redux";
 import { Layout, Spin, Icon } from 'antd';
 import { Switch, Route } from "react-router-dom";

 import { getMovies } from "../actions";
 import {
     MainPageContainer,
     MovieContainer,
     ScheduleContainer
 } from "../containers";

const { Content } = Layout;

export class Main extends React.Component {
    componentDidMount() {
        this.props.getMovies();
    }

    render() {
        const { isLoading } = this.props;
        return (
    <Content style={{
            padding: '0 50px'
        }}>
        { isLoading
            ? <Spin indicator={<Icon type="loading-3-quarters" style={{ fontSize: 80 }} spin />} />
            : <Switch>
                <Route exact path={"/"} component={MainPageContainer}/>
                <Route exact path={"/movie/:id"} component={MovieContainer}/>
                <Route exact path={"/schedule"} component={ScheduleContainer}/>
            </Switch>}
    </Content>
        )
    }
}

 const mapDispatchToProps = {
     getMovies
 };

 const mapStateToProps = (state) => ({
     isLoading:state.loading.isLoading
 });
 export const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

