exports.newSession = function (req, res){
    req.session.name = 'Shi Wei';
    res.send(req.session.name);
}
exports.deleteSession = function(req, res){
    req.session.destroy();
    res.send('Session Destroyed');
}
exports.getSession = function (req, res){
    if (!req.session.name){
        res.send('undefined');
    }else{
        res.send(req.session.name);
    }
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