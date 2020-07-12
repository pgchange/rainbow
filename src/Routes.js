import Login from './components/login/index';
import Index from './components/home/index';
import User from './components/user/user/index';

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
    },
    {
        path: "/user",
        component: User,
        key: 'user'
    },

];



