import pageinfo_api from '../handlers/pageinfo.js';

export function getPageInfo({ commit, state }, pageId) {
    return pageinfo_api.getPageInfo(pageId)
        .then(json => {
            const pageInfo = json.page;
            const moduleInfo = json.modules;
            commit('getPageInfo', { pageInfo });
            commit('getModuleInfo', { moduleInfo });
        })
}