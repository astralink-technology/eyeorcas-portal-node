var moment = require('moment');
exports.utcNow = function(req, res){
    return moment().utc();
};

exports.now = function(req, res){
    return moment().format();
}