import Vue from 'vue';
import VueRouter from 'vue-router';

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
