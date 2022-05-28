import React, {Component} from 'react';
import {Layout, Menu} from 'antd';
import {UserOutlined, LaptopOutlined, NotificationOutlined} from '@ant-design/icons';

import './index.css';

import history from '../../../util/history';

const {SubMenu} = Menu;
const {Sider} = Layout;

class MainMenu extends Component {

    handleUrl = (url) => {
        history.push(url);
    }

    render() {
        return (
            <Sider width={200} className="site-layout-background">
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['index']}
                    style={{height: '100%', borderRight: 0}}
                >
                    <SubMenu key="1" icon={<UserOutlined/>} title="首页">
                        <Menu.Item key="1"
                                   onClick={() => {
                                       this.handleUrl("index")
                                   }}>
                            首页
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="2" icon={<LaptopOutlined/>} title="用户中心">
                        <Menu.Item key="5"
                                   onClick={() => {
                                       this.handleUrl("user")
                                   }}>
                            用户管理
                        </Menu.Item>
                        <Menu.Item key="7"
                                   onClick={() => {
                                       this.handleUrl("roles")
                                   }}>
                            角色管理
                        </Menu.Item>
                        <Menu.Item key="6"
                                   onClick={() => {
                                       this.handleUrl("auth")
                                   }}>
                            权限管理
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="item" icon={<NotificationOutlined/>} title="商品中心">
                        <Menu.Item key="10"
                                   onClick={() => {
                                       this.handleUrl("backCategory")
                                   }}>
                            后台类目
                        </Menu.Item>
                        <Menu.Item key="11"
                                   onClick={() => {
                                       this.handleUrl("frontCategory")
                                   }}>
                            前台类目
                        </Menu.Item>
                        <Menu.Item key="9"
                                   onClick={() => {
                                       this.handleUrl("items")
                                   }}>
                            商品管理
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="order" icon={<NotificationOutlined/>} title="订单中心">
                        <Menu.Item key="12"
                                   onClick={() => {
                                       this.handleUrl("orders")
                                   }}>
                            订单管理
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        )
    }
}

export default MainMenu;


