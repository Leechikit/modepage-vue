import pic_api from '../../handlers/pic.js';

const state = {
    img: '',
    link: ''
}

const getters = {
    img: state => state.img,
    link: state => state.link
}

const mutations = {
    setImg(state, { img }) {
        state.img = img;
    },
    setLink(state, { link }) {
        state.link = link;
    }
}

const actions = {
    getPicData({ commit, state }, {moduleId}) {
        pic_api.getPicData(moduleId)
            .then(data => {
                const { img, link } = data;
                commit('setImg', { img });
                commit('setLink', { link });
            });
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}