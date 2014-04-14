mailSenderHelper = require('../../helpers/mailSender');

exports.sendMail = function(req, res){
    var mailingList = new Array();
    var recepient = new Object();
    recepient.email = "shiwei@chilli-panda.com";
    recepient.name = "Shi Wei";
    recepient.type = "to";

    mailingList.push (recepient);

    mailSenderHelper.sendMail(
        req
        , res
        , false
        , 'This is a test mail'
        , 'Test Mail'
        , mailingList
        , false
    );
}