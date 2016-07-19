
let gRouter = null;

function initRouter(VueRouter, options) {
    gRouter = new VueRouter(options);

    // 路由表
    gRouter.map({
        '/view01': {
            'name': 'view01',
            'component': function(reslove) {
                return require(['./views/view01'], reslove);
            }
        },
        '/view02': {
            'name': 'view02',
            'component': function(reslove) {
                return require(['./views/view02'], reslove);
            }
        }
    });

    gRouter.redirect({
    });

    gRouter.alias({
    });

    // 注册路由切换前
    gRouter.beforeEach(function(transition) {
        if (transition.to.path === '/forbidden') {
            transition.abort();
        } else {
            transition.next();
        }
    });

    // 注册路由切换后
    gRouter.afterEach(function(transition) {
        // console.log('成功浏览到: ' + transition.to.path)
    });

    gRouter.start(require('./app'), 'app');

    return gRouter;
}

export {
    initRouter as init,
    gRouter as getRouter
};

