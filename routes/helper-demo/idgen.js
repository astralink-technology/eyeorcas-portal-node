idgenHelper = require('../../helpers/idGen');
exports.generate = function(req, res){
    var id = idgenHelper.generateId();
    res.send(id);
}