var config = require('../config/webConfig');
var generateCharacters = function(length, chars){
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
}
exports.generateId = function(req, res){
    var rand = generateCharacters(8, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    var rand2 = generateCharacters(8, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    var rand3 = generateCharacters(8, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ');

    var result = rand + "-" + rand2 + "-" + rand3;

    return result;
}