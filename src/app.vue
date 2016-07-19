<template>
    <h1>Hello App!</h1>
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
    // @import 'node_modules/hotcss/px2rem.less';
</style>