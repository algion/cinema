import React from "react";
import { Layout } from 'antd/lib/index';

import { HeaderComponent } from "./index";
import { MainContainer } from "../routes";

const { Footer } = Layout;

export const App = () => (
    <Layout className="layout">
    <HeaderComponent/>
        <MainContainer/>
        <Footer><div className="text-wrap"><span>Ant Design ©2019 Created by Ant UED</span></div></Footer>
    </Layout>
);