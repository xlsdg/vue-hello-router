import Vue from 'vue';

import VueAsyncData from 'vue-async-data';
import VueLazyloadImg from 'vue-lazyload-img';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import VueX from 'vuex';

Vue.use(VueAsyncData);
Vue.use(VueResource);
Vue.use(VueRouter);

var router = new VueRouter();

router.map({
    '/view01': {
        component: require('./views/view01')
    },
    '/view02': {
        component: require('./views/view02')
    }
});

router.start(require('./app'), 'app');
