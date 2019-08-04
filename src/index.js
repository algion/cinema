import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { Router } from "react-router-dom";

import './assets/style/index.scss';
import { App } from './components';
import { store, history } from "./store"

ReactDOM.render(
    <Provider store={store}>
    <Router history={history}>
        <App />
    </Router>
    </Provider>
    , document.getElementById('root')
);


