var dbconnectHelper = require('../../helpers/dbConnect');
var idgenHelper = require('../../helpers/idGen');
var dateTimeHelper = require('../../helpers/dateTime');
var cryptHelper = require('../../helpers/crypt');

exports.getUserDevicesDetails = function(req, res){
    var ownerId = null;
    if (req.query.OwnerId) ownerId = req.query.OwnerId;

    var tpConfig = new Object();
    tpConfig.appName = "orcasMonitor";
    tpConfig.username = "ubuntu";
    tpConfig.password = "astralink";
    tpConfig.host = "home.eyeorcas.com";
    tpConfig.port = "5432";
    tpConfig.db = "orcas_monitor";

    dbconnectHelper.connectAndQuery(
        req, res,
        'SELECT ' +
        'device_relationship_value.* ' +
            ' , device.type' +
            ' , device.type2' +
            ' , device.code' +
            ' , device.owner_id' +
            ' , device.device_id' +
            ' , device.code' +
            ' , device_relationship_value.type as device_relationship_value_type' +
            ' , device_relationship_value.description as device_relationship_value_description ' +
        'FROM device ' +
        'INNER JOIN device_relationship ON device.device_id = device_relationship.device_id ' +
        'INNER JOIN device_relationship_value ' +
        'ON device_relationship.device_relationship_id = device_relationship_value.device_relationship_id ' +
        'where device_relationship.owner_id = $1'
        , [ownerId]
        , function(results){
            var code = results.rows[0].code;
            if (code){
                dbconnectHelper.connectAndQuery(
                    req
                    , res
                    , 'Select status from monitor where camera_id = $1'
                    , [
                        code
                    ],null, tpConfig);
            }else{
                res.json({
                    RowsReturned : 0,
                    Data : null,
                    Error : true,
                    ErrorDesc : 'No connected camera.',
                    ErrorCode: -1
                });
            }
        }
    );


};