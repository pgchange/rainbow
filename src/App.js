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

import './App.css'

const {Content} = Layout;

function App() {
    return (
        <Provider store={store}>
            <Layout>
                <MainHeader/>
                <Layout>
                    <MainMenu/>
                    <Layout style={{padding: '0 24px 24px'}}>
                        <Content
                            className="site-layout-background"
                            style={{
                                paddingLeft: 10,
                                margin: "16px",
                                minHeight: 360,
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
