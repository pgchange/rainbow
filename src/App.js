import React from 'react';
import './style/reset.scss';
import {Router,Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import history from './util/history';

import routes from './Routes';


function App() {
  return (
      <Provider store={store}>
          <Router history={history}>
              {
                  routes.map(route =>(
                      <Route {...route} />
                  ))
              }
          </Router>
      </Provider>
  );
}

export default App;
