datetimeHelper = require('../../helpers/dateTime');

exports.utcNow = function(req, res){
    res.send(datetimeHelper.utcNow());
};