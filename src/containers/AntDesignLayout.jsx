import React from 'react'

import { Layout, Menu } from 'antd';
import "antd/dist/antd.css";
import "../assets/style/AntDesignLayout.css"
const { Header, Content, Footer } = Layout;

export const AntDesignLayout = () => (
    <Layout className="layout">
        <Header>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
        </Header>
        <Content style={{
            padding: '0 50px',
            background: '#bfeeca'
        }}>


        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
);