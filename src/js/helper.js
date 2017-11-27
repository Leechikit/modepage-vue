export function api({ url, ...params }) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url,
            type: 'GET',
            cache: false,
            timeout: 5000,
            dataType: 'json',
            data: {
                ...params
            }
        })
            .done(function (json) {
                resolve(json);
            })
            .fail(function (err) {
                reject(err);
            });
    });
}

export const yyinfo = navigator.userAgent.match(/.*YY([\/\(])?(ClientVersion:)?([0-9\.]+).*/);

export function gotoUrl(url) {
    let formatUrl = urlRepalce(url);
    if (yyinfo) {
        var encodeUrl = encodeURIComponent(formatUrl);
        window.YYApiCore.invokeClientMethod('ui', 'goto', { 'uri': 'yymobile://Web/Features/5/Url/' + encodeUrl });
    } else {
        window.location.href = formatUrl;
    }
}

export function urlRepalce(url) {
    const PROTOCOLREG = new RegExp(/^https?:/);
    const URLREG = new RegExp(/^www\..+/);
    let result = url;
    if (url && PROTOCOLREG.test(url)) {
        result = url.replace(PROTOCOLREG, location.protocol);
    } else if (URLREG.test(url)) {
        result = `${location.protocol}//${url}`;
    }
    return result;
}

export function dealNum(str, type) {
    var num = parseInt(str);
    var type = type || 1;
    if (type == 1) {
        // 当数值达到一定程度时，以万表示
        if (num > 9999) {
            //保留两位小数，四舍五入
            var strnum = (num / 10000).toFixed(1) + "万";
            return strnum;
        } else if (num <= 9999) {
            return strnum = divide(str);
        }
    } else if (type == 2) {
        // 只做数据分隔，不以万表示
        return strnum = divide(str);
    }
}