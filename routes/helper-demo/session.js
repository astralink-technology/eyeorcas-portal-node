exports.newSession = function (req, res){
    req.session.name = 'Shi Wei';
    res.send(req.session.name);
}
exports.deleteSession = function(req, res){
    req.session.destroy();
    res.send('Session Destroyed');
}
exports.getSession = function (req, res){
    res.json({
        'firstName' : req.session.firstName
        , 'lastName' : req.session.lastName
        , 'status' : req.session.status
        , 'approved' : req.session.approved
        , 'entityId' : req.session.entityId
        , 'authenticationId' : req.session.authenticationId
        , 'authorizationLevel' : req.session.authorizationLevel
    });
}
exports.updateSession = function (req, res){
    var storedSession = req.session.name;
    if (storedSession == 'Shi Wei'){
        req.session.name = 'Cety';
    }else{
        req.session.name = 'Shi Wei';
    }
    res.send(req.session.name);
}