exports.authorizationLevels = function(req, res, levelRequired){
    if (req.session.authorizationLevel < levelRequired || !req.session.authorizationLevel){
        //user is not allowed to view the page, redirect to illegal page
        return res.redirect('/error/401');
    }
}

exports.alreadyAuthorized = function (req, res, redirectionPage){
    if (req.session.authenticationId){
        //if user is authenticated, redirect user to the page
        return res.redirect(redirectionPage);
    }
}