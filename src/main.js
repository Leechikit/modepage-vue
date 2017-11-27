import Vue from 'vue';
import VueRouter from 'vue-router';

// import './js/register.js';
import store from './store';
import indexPage from './pages/indexPage.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [{
        path: '/index/:pageid',
        name: 'index',
        component: indexPage
    },{
        path: '*/:pageid',
        name: '*',
        component: indexPage
    }]
});

const app = new Vue({
    el: '#app',
    store,
    router,
    template: '<router-view></router-view>'
})
