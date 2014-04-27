var authorizationHelper = require('../helpers/authorization');

exports.index = function(req, res){
    var authLevel = req.session.authorizationLevel;
    res.render('index', {
        title: 'eyeOrcas'
        , viewClass: 'landing'
        , ngController: 'landingController'
        , user: 'public'
        , authorizationLevel : authLevel
    });
};