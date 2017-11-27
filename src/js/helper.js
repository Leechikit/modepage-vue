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