import React from 'react';
import { Layout } from "antd";
import { Link, NavLink } from "react-router-dom";
const { Header } = Layout;

export const HeaderComponent = () => (
  <Header>
      <Link to="/" className="logo"/>
     <nav>
         <NavLink to="/" activeClassName="active">Films</NavLink>
         <NavLink to="/shedule" activeClassName="active">Shedule</NavLink>
         <NavLink to="/user" activeClassName="active">3</NavLink>
     </nav>
  </Header>
);