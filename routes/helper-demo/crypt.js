cryptHelper = require('../../helpers/crypt');
exports.decryption = function(req, res){
    var hashedPassword = '$2a$10$JmgE8jMvnscIgfTkaglpNeBWJLK5YlmtyadHoIiTZ9NaAK9Rwqk/6';
    var inputPassword = 's8944896d';
    res.send(cryptHelper.decrypt(req, res, inputPassword, hashedPassword));
}
exports.encryption = function (req, res){
    var password = 's8944896d';
    res.send(cryptHelper.encrypt(req, res, password));
}

exports.legacyDecryption = function (req, res){
    var hashedPassword = '$2y$10$GY93N2dtTvE9dfdpmcO0X.uTfu75iKxfyFH50SpXStDdZjun6VLQG';
    var inputPassword = 's8944896d';

    cryptHelper.legacyDecrypt(req, res, inputPassword, hashedPassword, function(result){
        if (result){
            res.json('authenticated');
        }else{
            res.json('authentication failed');
        }
    })
}