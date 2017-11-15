import Vue from 'vue';
import VueRouter from 'vue-router';

import './js/register.js';
import indexPage from './pages/indexPage.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [{
        path: '/index',
        name: 'index',
        component: indexPage
    },{
        path: '*',
        name: '*',
        component: indexPage
    }]
});

const app = new Vue({
    el: '#app',
    router,
    template: '<router-view></router-view>'
})
