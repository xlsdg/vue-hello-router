<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script type="text/babel">
    export default {
        'name': 'hello',
        'components': {
        },
        'props': {
        },
        'data': () => {
            return {
                'msg': 'Hello World!'
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
        },
        'beforeDestroy': () => {
        },
        'destroyed': () => {
        },
        'watch': {
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    h1 {
        color: #42b983;
        text-align: center;
    }
</style>
