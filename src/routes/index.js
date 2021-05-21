const newsRouter = require('./news');
const meRouter = require('./me');
const sitesRouter = require('./site');
const coursesRouter = require('./courses');
const cateRouter = require('./category');
const userRouter = require('./user');
const cartRouter = require('./cart');
const commentRouter = require('./comment');


function route(app) {
    app.use('/news', newsRouter);
    app.use('/me', meRouter);
    app.use('/courses', coursesRouter);
    app.use('/user', userRouter);
    app.use('/cart', cartRouter);
    app.use('/', sitesRouter);
    app.use('/catalogs', cateRouter);
    app.use('/comment', commentRouter);
}

module.exports = route;