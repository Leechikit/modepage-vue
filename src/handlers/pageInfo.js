import { api } from '../js/helper.js';

export default {
    getPageInfo(pageId) {
        return api({
            url: '../api/getPageInfo.json',
            pageId
        }).then(json => {
            if (json.result == 0) {
                return json;
            } else {
                return Promise.reject('服务器错误');
            }
        })
    }
}