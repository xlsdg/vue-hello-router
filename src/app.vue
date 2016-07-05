<template>
    <h1>Hello App!</h1>
    <p>
        <a v-link="{ path: '/view01' }">Go to View 01</a>
        <a v-link="{ path: '/view02' }">Go to View 02</a>
    </p>
    <router-view></router-view>
</template>

<script>
    export default {
        name: 'app',
        components: {}
    };
</script>

<style>
</style>