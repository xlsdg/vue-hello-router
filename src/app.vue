<template>
    <h1>Hello App!</h1>
    <p>
        <a v-link="{ path: '/view01' }">Go to View 01</a>
        <a v-link="{ path: '/view02' }">Go to View 02</a>
    </p>
    <router-view></router-view>
</template>

<script type="text/babel">
    export default {
        name: 'app',
        components: {},
        props: {},
        data () {
            return {};
        },
        methods: {},
        created () {},
        beforeCompile () {},
        compiled () {},
        ready () {},
        beforeDestroy () {},
        destroyed () {},
        watch: {}
    };
</script>

<style lang="less" scoped>
</style>