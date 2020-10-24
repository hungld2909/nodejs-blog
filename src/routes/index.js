
const newsRouter = require('./news');
const sitesRouter = require('./site');

function route(app){


    app.use('/news',newsRouter);
    app.use('/',sitesRouter); //! với những thằng "/" thì nên đưa xuống dưới cùng, nếu đưa lên trên sẽ xảy ra lỗi.


}

module.exports = route;