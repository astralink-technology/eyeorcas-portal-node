var dbconnectHelper = require('../../helpers/dbConnect');
var idgenHelper = require('../../helpers/idGen');
var dateTimeHelper = require('../../helpers/dateTime');
exports.getDeviceDetails= function(req, res){

    var deviceId = null;
    var name = null;
    var code = null;
    var status = null;
    var type = null;
    var type2 = null;
    var push = null;
    var token = null;
    var sms = null;
    var quality= null;
    var resolution = null;
    var deviceValueType = null;
    var ownerId  = null;
    var pageSize = null;
    var skipSize = null;


    if (req.query.DeviceId) deviceId = req.query.DeviceId;
    if (req.query.Name) name = req.query.Name;
    if (req.query.Code) code = req.query.Code;
    if (req.query.Status) status = req.query.Status;
    if (req.query.Type) type = req.query.Type;
    if (req.query.Type2) type2 = req.query.Type2;
    if (req.query.Push) push = req.query.Push;
    if (req.query.Token) token = req.query.Token;
    if (req.query.Sms) sms = req.query.Sms;
    if (req.query.Quality) quality = req.query.Quality;
    if (req.query.Resolution) resolution = req.query.Resolution;
    if (req.query.DeviceValueType) deviceValueType = req.query.DeviceValueType;
    if (req.query.OwnerId ) ownerId = req.query.OwnerId;
    if (req.query.PageSize) pageSize = req.query.PageSize;
    if (req.query.SkipSize) skipSize = req.query.SkipSize;


    dbconnectHelper.connectAndQuery(
        req
        , res
        , 'SELECT * FROM  get_device_details($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)'
        , [
            deviceId
            , name
            , code
            , status
            , type
            , type2
            , push
            , token
            , sms
            , quality
            , resolution
            , deviceValueType
            , ownerId
            , pageSize
            , skipSize
        ]);
};