import React from 'react';

import { Layout } from "antd";
import { Link, NavLink  } from "react-router-dom";
const { Header } = Layout;


export const HeaderComponent = () => (
  <Header>
      <Link to="/" className="logo"><img src="http://tmhanuman.ru/images/cinema/logo59.jpg" width="120" height="43" alt=""/></Link>
      {/*<div className="logo"/>*/}
      <nav id="left">
          <NavLink exact to="/" activeClassName="active">Фильмы</NavLink>
          <NavLink to="/schedule" >Сеансы</NavLink>
          <NavLink to="/project" >Коллекция</NavLink>
          <NavLink id="right" exact to="/" activeClassName="active" >Личный кабинет</NavLink>
      </nav>

  </Header>
);