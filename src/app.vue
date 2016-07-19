<template>
    <hello></hello>
    <p>
        <a v-link="{ path: '/view01' }">Go to View 01</a>
        <a v-link="{ path: '/view02' }">Go to View 02</a>
    </p>
    <router-view></router-view>
</template>

<script type="text/babel">
    require('normalize.css');
    require('hotcss');

    export default {
        name: 'app',
        components: {
            hello: require('./components/Hello')
        },
        props: {
        },
        data: () => {
            return {
            };
        },
        computed: {
        },
        methods: {
        },
        created: () => {
        },
        beforeCompile: () => {
        },
        compiled: () => {
        },
        ready: () => {
        },
        beforeDestroy: () => {
        },
        destroyed: () => {
        },
        watch: {
        }
    };
</script>

<style lang="less" scoped>
    @import '../node_modules/hotcss/src/px2rem.less';
    h1 {
        font-size: px2rem(12px);
    }
</style>