import Vue from 'vue';
import Vuex from 'vuex';
import pic from './modules/pic.js';

const state = {
    link: 'http://www.qq.com'
}

const getters = {
    link: state => state.link
}

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    getters,
    modules: {
        pic
    }
})