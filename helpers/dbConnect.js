var config = require('../config/webConfig');
var pg = require('pg');

exports.connectAndQuery = function(req, res, queryString, variables){
    var dbConfig = config.dbConfig();
    var conString = dbConfig.appName + "://" +  dbConfig.username + ":" + dbConfig.password + "@" + dbConfig.host + ":" + dbConfig.port + "/" + dbConfig.db;
    var client = new pg.Client(conString);
    client.connect(function(err) {
        if(err) {
            console.log(err + " " + conString);
        }
        client.query(
            queryString
            , variables
            , function(err, result) {
                if(err) {
                    res.json({
                        RowsReturned : null,
                        Data : null,
                        Error : true,
                        ErrorDesc : err,
                        ErrorCode: 500
                    });
                }else{
                    res.json({
                        RowsReturned : result.rows.length,
                        Data : result.rows,
                        Error : false,
                        ErrorDesc : null,
                        ErrorCode: null
                    });
                }
                client.end();
            });
    });
}