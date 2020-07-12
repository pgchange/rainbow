import React, {Component} from 'react';
import {Layout, Menu, Breadcrumb} from 'antd';
import {UserOutlined, LaptopOutlined, NotificationOutlined} from '@ant-design/icons';

import './index.css';

const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;


class MainHeader extends Component {


    render() {
        return (
            <Header className="header">
                <div className="logo"></div>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{textAlign: "right"}}>
                    <Menu.Item key="1">用户AAA</Menu.Item>
                    <Menu.Item key="2">系统管理员</Menu.Item>
                    <Menu.Item key="3">退出登录</Menu.Item>
                </Menu>
            </Header>
        )
    }

}

export default MainHeader;


