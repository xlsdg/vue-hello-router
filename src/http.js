import Vue from 'vue';

function initHttp() {
    Vue.http.options.credentials = true;
    Vue.http.options.emulateHTTP = false;
    Vue.http.options.emulateJSON = false;
    // Vue.http.options.xhr = {
    //     'withCredentials': true
    // };
    console.dir(Vue);
}

function get(url, data) {
    return Vue.http.get(url, {
        'params': data
    });
}

function post(url, data) {
    return Vue.http.post(url, data);
}

function procSrvError(res) {
    console.log(res);
}

function procReqError(res) {
    console.log(res);
}

function procRequest(req) {
    return req.then(
        function success(response) {
            if (response.data && response.data.status === 1) {
                return response.data;
            } else {
                procSrvError(response);
                return null;
            }
        },
        function error(response) {
            procReqError(response);
            return null;
        }
    );
}

function procGet(url, data) {
    return procRequest(get(url, data));
}

function procPost(url, data) {
    return procRequest(post(url, data));
}

export {
    initHttp as init,
    get as get,
    post as post,
    procRequest as procReq,
    procGet as procGet,
    procPost as procPost
};
