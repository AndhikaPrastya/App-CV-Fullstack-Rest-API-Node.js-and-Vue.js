import Home from './components/Home.vue'
import Login from './components/auth/Login.vue'
import Register from './components/auth/Register.vue'

const routes = [
    {
        name: '/',
        path: '/',
        component: Login
    },
    {
        name: '/',
        path: '/home',
        component: Home
    },
    {
        name: '/',
        path: '/register',
        component: Register
    },

];
 
export default routes