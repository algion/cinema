import React from "react";
import { Layout } from 'antd/lib/index';

import { HeaderComponent } from "./index";
import { MainContainer } from "../routes";

const { Footer } = Layout;

export const App = () => (
    <Layout className="layout">
    <HeaderComponent/>
        <MainContainer/>
        <Footer>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
);