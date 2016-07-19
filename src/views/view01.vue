<template>
    <p>This is View 01!</p>
</template>

<script type="text/babel">
    import {user} from '../api';
    export default {
        'name': 'view01',
        'components': {
        },
        'props': {
        },
        'data': () => {
            return {
            };
        },
        'computed': {
        },
        'methods': {
        },
        'created': () => {
        },
        'beforeCompile': () => {
        },
        'compiled': () => {
        },
        'ready': () => {
            let data = {
                'name': 'xlsdg'
            };
            user.info(data).then((res) => {
                console.log(res);
            });
        },
        'beforeDestroy': () => {
        },
        'destroyed': () => {
        },
        'watch': {
        }
    };
</script>

<style lang="less" scoped>
</style>