var moment = require('moment');
exports.utcNow = function(req, res){
    return moment().utc();
};

exports.now = function(req, res){
    return moment().format();
}

exports.convertToUtc = function (req, res, dateTime){
    if (dateTime){
        return moment(dateTime).utc().format();
    }else{
        return false;
    }
}