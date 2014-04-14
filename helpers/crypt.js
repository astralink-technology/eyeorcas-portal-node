var bcrypt = require('bcrypt');
exports.encrypt = function(req, res, string){
    var hash = bcrypt.hashSync(string, 10);
    return hash;
}
exports.decrypt = function(req, res, string, hash){
    var match = bcrypt.compareSync(string, hash);
    if (match){
        return true;
    }else{
        return false;
    }
}