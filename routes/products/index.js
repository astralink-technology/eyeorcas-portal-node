var authorizationHelper = require('../../helpers/authorization');

exports.eyex = function(req, res){
    var authLevel = req.session.authorizationLevel;
    res.render('index', {
        title: 'eyeX Solution'
        , viewClass: 'landing'
        , ngController: 'landingController'
        , user: 'public'
        , authorizationLevel : authLevel
    });
};
exports.lifecare = function(req, res){
    var authLevel = req.session.authorizationLevel;
    res.render('products/lifecare', {
        title: 'LifeCare'
        , viewClass: 'lifecare'
        , ngController: 'lifecareController'
        , user: 'public'
        , authorizationLevel : authLevel
    });
};

exports.lifebox = function(req, res){
    var authLevel = req.session.authorizationLevel;
    res.render('products/lifebox', {
        title: 'LifeBox!'
        , viewClass: 'lifebox'
        , ngController: 'lifeboxController'
        , user: 'public'
        , authorizationLevel : authLevel
    });
};