var config = require('../config/webConfig');
var pg = require('pg');

exports.connectAndQuery = function(req, res, queryString, variables, afterQueryFunction, tpAppName, tpUsername, tpPassword, tpHost, tpPort, tpDb){
    var dbConfig = config.dbConfig();
    var conString = dbConfig.appName + "://" +  dbConfig.username + ":" + dbConfig.password + "@" + dbConfig.host + ":" + dbConfig.port + "/" + dbConfig.db;

    //allow users to connect to third party database after user pass in the values.
    if (tpAppName && tpUsername && tpPassword && tpHost && tpPort && tpDb){
        conString = tpAppName + "://" +  tpUsername + ":" + tpPassword + "@" + tpHost + ":" + tpPort + "/" + tpDb;
    }

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
                        RowsReturned : result,
                        Data : null,
                        Error : true,
                        ErrorDesc : err,
                        ErrorCode: 500
                    });
                    return;
                }else{
                    if(afterQueryFunction){
                        afterQueryFunction(result);
                    }else{
                        res.json({
                            RowsReturned : result.rows.length,
                            Data : result.rows,
                            Error : false,
                            ErrorDesc : null,
                            ErrorCode: null
                        });
                    }
                }
                client.end();
            });
    });
}

exports.lifeCareConnectAndQueryLite = function(req, res, queryString, variables){
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
                    res.json(500);
                    return;
                }else{
                    res.json(result.rows);
                }
                client.end();
            });
    });
}
