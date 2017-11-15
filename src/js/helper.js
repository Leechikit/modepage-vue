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
    if (yyinfo) {
        var encodeUrl = encodeURIComponent(url);
        window.YYApiCore.invokeClientMethod('ui', 'goto', { 'uri': 'yymobile://Web/Features/5/Url/' + encodeUrl });
    } else {
        window.location.href = url;
    }
}