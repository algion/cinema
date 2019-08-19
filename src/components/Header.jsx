import React from 'react';

import { Layout } from "antd";
import { Link, NavLink  } from "react-router-dom";
const { Header } = Layout;


export const HeaderComponent = () => (
  <Header>
      <Link to="/" className="logo"/>
      {/*<div className="logo"/>*/}
      <nav>
          <NavLink to="/" activeClassName="active">Films</NavLink>
          <NavLink to="/schedule" activeClassName="active">Schedule</NavLink>
          <NavLink to="/user" activeClassName="active">3</NavLink>
      </nav>
  </Header>
);