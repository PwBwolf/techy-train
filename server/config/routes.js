module.exports = function (app) {
    app.get('/partials/*', function (req, res) {
        res.render('../../public/app/' + req.params[0]); //req.params is an array and the first positon will match up to the * in the path
    })

    app.get('*', function (req, res) { // * matches all routes to deleviver index page that has client side routing.
        res.render('index');
    });
}