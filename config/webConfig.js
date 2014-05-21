exports.dbConfig = function(){
    var dbConfig = new Object();

    dbConfig.appName = 'eyeOrcas';
    dbConfig.username = 'ubuntu';
    dbConfig.password = 'astralink';
    dbConfig.host = 'home.eyeorcas.com';
    dbConfig.port = '5432';
    dbConfig.db = 'OrcasEye';
//
//    dbConfig.appName = 'cp-core';
//    dbConfig.username = 'shiwei';
//    dbConfig.password = 's8944896d';
//    dbConfig.host = 'cp-instance.cbummwrzqw10.ap-southeast-1.rds.amazonaws.com';
//    dbConfig.port = '5432';
//    dbConfig.db = 'cpdb';
    return dbConfig;
}

exports.mailConfig = function(){

    var mailConfig = new Object();

    mailConfig.host = 'smtp.mandrillapp.com';
    mailConfig.username = 'shiweifong@gmail.com';
    mailConfig.password = '9nwaBLJV5FtYeOeyfF_yBQ';
    mailConfig.from = 'shiwei@chilli-panda.com';
    mailConfig.fromName = 'Chillipanda';
    mailConfig.addReplyTo = 'shiwei@chilli-panda.com';
    mailConfig.bcc = 'shiwei@chilli-panda.com';

    return mailConfig;
}