import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';


const middlewares = [];
const reducer = combineReducers({
    // user: userReducer,
});

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
// middlewares.push(logger);
middlewares.push(thunk);

const enhancer = composeEnhancers(applyMiddleware(...middlewares))
const store = createStore(reducer,
    enhancer
);
export default store;