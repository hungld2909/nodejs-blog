class NewController {
    //! [GET] /news
    index(req, res) {
        res.render('new');
    }
    //! [GET] /news/:slug
    show(req, res) {
        res.send('news detail !!!');
    }
}

module.exports = new NewController();
