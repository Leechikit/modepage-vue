import { api } from '../js/helper.js';

export default {
    getPicData(moduleId) {
        return api({
            url: '../api/getPicData.json',
            moduleId
        }).then(json => {
            if (json.code == 0) {
                return json.data;
            } else {
               return Promise.reject('服务器错误');
            }
        })
    }
}