 import React from "react";
 import { connect } from "react-redux";
 import { Icon, Layout, Spin } from 'antd';
 import { Switch, Route } from "react-router-dom";

 import { getMovies } from "../actions";
 import {
     MainPageContainer,
     MovieContainer,
     ScheduleContainer,
 } from "../containers";
 import { ProjectComponent } from  "../components";

const { Content } = Layout;

export class Main extends React.Component {
    componentDidMount() {
        this.props.getMovies();
    }

    render() {
        const { isLoading } = this.props;
        if (isLoading) {
            return  <Spin indicator={<Icon type="loading-3-quarters" style={{ fontSize: 80 }} spin />} />
        }
        return (
    <Content style={{
            padding: '0 50px'
        }}>
             <Switch>
                <Route exact path={"/"} component={MainPageContainer}/>
                <Route path={"/movie/:id"} component={MovieContainer}/>
                <Route path={"/schedule"} component={ScheduleContainer}/>
                 <Route path={"/project"} component={ProjectComponent}/>
            </Switch>
    </Content>
        )
    }
}
 const mapStateToProps = (state) => ({
     isLoading: state.loading.isLoading
 });
 const mapDispatchToProps = {
     getMovies
 };

 export const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

