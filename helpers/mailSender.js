var config = require('../config/webConfig');
var mandrill = require('mandrill-api/mandrill');
var mandrill_client = new mandrill.Mandrill('9nwaBLJV5FtYeOeyfF_yBQ');

var mailsending_config = config.mailConfig();

exports.sendMail = function(
    req
    , res
    , htmlContent
    , text
    , subject
    , mailinglist
    , importantMessage
    ){

    var important = false;
    /*
        READ ME Declare mailing list
        mailinglist = new Array();
        receiver[0] = new Object();
        receiver[0].email = "mail@mail.com"; //email
        receiver[0].name = "receiver1"; //receiver's name
        receiver[0].type = "to"; // receiving type , cc/ bcc/ to
        mailingList.push(receiver[0]); //adds to mailing list
     */

    //adds a bcc to the admin
    var admin = new Object();
    admin.email = "shiweifong@gmail.com";
    admin.name = "Shi Wei";
    admin.type = "bcc";
    mailinglist.push(admin);

    if(importantMessage){
        important = true;
    }

    var message = {
        "html": htmlContent,
        "text": text,
        "subject": subject,
        "from_email": mailsending_config.from,
        "from_name": mailsending_config.fromName,
        "to": mailinglist,
        "headers": {
            "Reply-To": mailsending_config.addReplyTo
        },
        "important": important
    };
    mandrill_client.messages.send({"message": message, "async": false}, function(result) {
        res.send(result);
    }, function(e) {
        res.send('A mandrill error occurred: ' + e.name + ' - ' + e.message);
    });

}