import Login from './components/login/index';
import Index from './components/home/index';

export default [
    {
        path: "/login",
        component: Login,
        key: 'login'
    },
    {
        path: "/index",
        component: Index,
        key: 'index'
    }
];



