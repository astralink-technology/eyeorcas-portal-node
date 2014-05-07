datetimeHelper = require('../../helpers/dateTime');

exports.utcNow = function(req, res){
    res.send(datetimeHelper.utcNow());
};

exports.now = function(req, res){
    res.send(datetimeHelper.now());
};