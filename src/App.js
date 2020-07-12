import React from 'react';
import './style/reset.scss';
import {Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import history from './util/history';
import {Layout, Breadcrumb} from 'antd';

import MainMenu from './components/common/menu/index';
import MainHeader from './components/common/header/index';

import routes from './Routes';

const {Content} = Layout;

function App() {
    return (
        <Provider store={store}>
            <Layout>
                <MainHeader/>
                <Layout>
                    <MainMenu/>
                    <Layout style={{padding: '0 24px 24px'}}>
                        <Breadcrumb style={{margin: '16px 0'}}>
                            <Breadcrumb.Item>首页</Breadcrumb.Item>
                            <Breadcrumb.Item>首页</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            <Router history={history}>
                                {
                                    routes.map(route => (
                                        <Route {...route} />
                                    ))
                                }
                            </Router>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </Provider>
    );
}

export default App;
