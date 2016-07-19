import Vue from 'vue';

import VueAsyncData from 'vue-async-data';
Vue.use(VueAsyncData);

import VueResource from 'vue-resource';
Vue.use(VueResource);

import * as Http from './http';
Http.init();

import VueX from 'vuex';
Vue.use(VueX);

import 'vue-lazyload-img';
Vue.use(Vue.lazyimg, {
    'fade': true,
    'nohori': true,
    'speed': 20
});

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import * as Router from './router';
Router.init(VueRouter, {
    'hashbang': false,
    'history': true,
    'abstract': false,
    'root': null,
    'linkActiveClass': 'v-link-active',
    'saveScrollPosition': true,
    'transitionOnLoad': false,
    'suppressTransitionError': false
});

