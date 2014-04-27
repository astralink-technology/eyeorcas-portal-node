var config = require('../config/webConfig');
var bcrypt = require('bcrypt');
var request = require('request');


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

exports.legacyDecrypt = function(req, res, string, hash, result){
    request.post(
        config.legacyConfig + '/helper/verify',
        { form: { InputPassword: string, HashedPassword : hash } },
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                result(Boolean(body.replace(/\n/g, "")));
            }else{
                result(false);
            }
        }
    );
}