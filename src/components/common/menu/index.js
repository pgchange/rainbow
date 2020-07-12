import React, {Component} from 'react';
import {Layout, Menu, Breadcrumb} from 'antd';
import {UserOutlined, LaptopOutlined, NotificationOutlined} from '@ant-design/icons';

import './index.css';

const {SubMenu} = Menu;
const {Sider} = Layout;


class MainMenu extends Component {

    handleUrl = (url) => {

        console.log(url)
    }

    render() {
        return (
            <Sider width={200} className="site-layout-background">
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{height: '100%', borderRight: 0}}
                >
                    <SubMenu key="index" icon={<UserOutlined/>} title="首页">
                        <Menu.Item key="1">首页</Menu.Item>
                    </SubMenu>
                    <SubMenu key="user" icon={<LaptopOutlined/>} title="用户中心">
                        <Menu.Item key="5" onClick={this.handleUrl("user")}>用户管理</Menu.Item>
                        <Menu.Item key="6">权限管理</Menu.Item>
                        <Menu.Item key="7">角色管理</Menu.Item>
                    </SubMenu>
                    <SubMenu key="item" icon={<NotificationOutlined/>} title="商品中心">
                        <Menu.Item key="10">后台类目</Menu.Item>
                        <Menu.Item key="11">前台类目</Menu.Item>
                        <Menu.Item key="9">商品管理</Menu.Item>
                    </SubMenu>
                    <SubMenu key="order" icon={<NotificationOutlined/>} title="订单中心">
                        <Menu.Item key="9">订单管理</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        )
    }
}

export default MainMenu;


