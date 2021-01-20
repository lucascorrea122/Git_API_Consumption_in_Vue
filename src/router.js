import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/Home.vue'
import Users from './views/Users/Users.vue'
import Profile from './views/Profile/Profile.vue'

Vue.use(Router);

export default new Router({
    mode: "history",
    routes:[
        {
            path:'/',
            name: 'home',
            component: Home,
            
        },
        {
            path: '/users',
            name: 'users',
            component: Users,
        },
        {
            path: '/profile/:data',
            name: 'profile',
            component: Profile,
        }
    ]    

});

