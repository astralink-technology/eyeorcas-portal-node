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
            var code = new Array();
            for(var x= 0;x<results.rows.length;x++){
               code.push(results.rows[x].code);
//                'i7bf0ec5d777',
//                    '90a78300f447',
//                    'icca72cbd4c7',
//                    'ic58c0381d44',
//                    '90a783089e9a',
//                    'i6097678dd8d',
//                    '90a783008888',
//                    '90a783aaaa24',
//                    'i38afeb885d2',
//                    '08002856e53c',
//                    '08002856e598',
//                    '90a7830002bc',
//                    '90a7830014b4',
//                    '0006668072a8',
//                    '90a78300f440',
//                    '90a78300f441',
//                    '90a78300f43f',
//                    '90a783028888'
            }
            if (code){
                console.log(code);
                dbconnectHelper.connectAndQuery(
                    req
                    , res
                    , "Select * from monitor WHERE camera_id IN ('90a78300f441')"
                    , [],null, tpConfig);
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