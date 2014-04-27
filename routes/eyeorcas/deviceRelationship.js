var dbconnectHelper = require('../../helpers/dbConnect');
var idgenHelper = require('../../helpers/idGen');
var dateTimeHelper = require('../../helpers/dateTime');
var cryptHelper = require('../../helpers/crypt');

exports.getEntityDeviceRelationship = function(req, res){

    var deviceId = null;
    var name = null;
    var code = null;
    var status = null;
    var type = null;
    var type2 = null;
    var ownerId  = null;
    var pageSize  = null;
    var skipSize  = null;

    if (req.query.DeviceId) deviceId = req.query.DeviceId;
    if (req.query.Name) name = req.query.Name;
    if (req.query.Code) code = req.query.Code;
    if (req.query.Status) status = req.query.Status;
    if (req.query.Type) type = req.query.Type;
    if (req.query.Type2) type2 = req.query.Type2;
    if (req.query.OwnerId) ownerId = req.query.OwnerId;
    if (req.query.PageSize) pageSize = req.query.PageSize;
    if (req.query.SkipSize) skipSize= req.query.SkipSize;

    dbconnectHelper.connectAndQuery(
        req
        , res
        , 'SELECT * FROM  get_entity_device_relationship($1, $2, $3, $4, $5, $6, $7, $8, $9)'
        , [
            deviceId
            , name
            , code
            , status
            , type
            , type2
            , ownerId
            , pageSize
            , skipSize
    ]);
};
exports.getEntityDeviceRelationshipDetails = function(req, res){
        var deviceId = null;
        var ownerId = null;
        var deviceName = null;
        var deviceCode = null;
        var deviceStatus = null;
        var deviceType = null;
        var deviceType2 = null;
        var deviceRelationshipName = null;
        var deviceRelationshipPush = null;
        var deviceRelationshipSms = null;
        var deviceRelationshipToken = null;
        var deviceRelationshipResolution = null;
        var deviceRelationshipQuality = null;
        var deviceRelationshipType = null;
        var pageSize  = null;
        var skipSize  = null;


        if (req.query.DeviceId) deviceId = req.query.DeviceId;
        if (req.query.OwnerId) ownerId = req.query.OwnerId;
        if (req.query.DeviceName) deviceName = req.query.DeviceName;
        if (req.query.DeviceCode) deviceCode = req.query.DeviceCode;
        if (req.query.DeviceStatus) deviceStatus = req.query.DeviceStatus;
        if (req.query.DeviceType) deviceType = req.query.DeviceType;
        if (req.query.DeviceType2) deviceType2 = req.query.DeviceType2;
        if (req.query.DeviceRelationshipName) deviceRelationshipName = req.query.DeviceRelationshipName;
        if (req.query.DeviceRelationshipPush) deviceRelationshipPush = req.query.DeviceRelationshipPush;
        if (req.query.DeviceRelationshipSms) deviceRelationshipSms = req.query.DeviceRelationshipSms;
        if (req.query.DeviceRelationshipToken) deviceRelationshipToken = req.query.DeviceRelationshipToken;
        if (req.query.DeviceRelationshipQuality) deviceRelationshipQuality= req.query.DeviceRelationshipQuality;
        if (req.query.DeviceRelationshipResolution) deviceRelationshipResolution = req.query.DeviceRelationshipResolution;
        if (req.query.DeviceRelationshipType) deviceRelationshipType = req.query.DeviceRelationshipType;
        if (req.query.PageSize) pageSize = req.query.PageSize;
        if (req.query.SkipSize) skipSize= req.query.SkipSize;

        dbconnectHelper.connectAndQuery(
            req
            , res
            , 'SELECT * FROM  get_entity_device_relationship_details($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)'
            , [
                deviceId
                , ownerId
                , deviceName
                , deviceCode
                , deviceStatus
                , deviceType
                , deviceType2
                , deviceRelationshipName
                , deviceRelationshipPush
                , deviceRelationshipSms
                , deviceRelationshipToken
                , deviceRelationshipResolution
                , deviceRelationshipQuality
                , deviceRelationshipType
                , pageSize
                , skipSize
            ]);
};
exports.addEntityDeviceRelationshipWithValues = function (req, res){
    if (
    //specify the required variables for insert to work
        req.body.DeviceName &&
        req.body.DeviceCode &&
        req.body.OwnerId &&
        req.body.DeviceId
        ){
            var deviceName = null;
            var deviceCode = null;
            var deviceStatus = null;
            var deviceType = null;
            var deviceType2 = null;
            var deviceDescription = null;
            var deviceOwnerId = null;
            var ownerId = null;
            var name = null;
            var push = null;
            var sms = null;
            var token = null;
            var type = null;
            var resolution = null;
            var quality = null;
            var password = null;
            var description = null;
            var hash = null;

            var deviceRelationshipId = idgenHelper.generateId();
            var deviceId = idgenHelper.generateId();
            var deviceRelationshipValueId = idgenHelper.generateId();

            var deviceCreateDate = dateTimeHelper.utcNow();
            var deviceRelationshipCreateDate = dateTimeHelper.utcNow();
            var createDate = dateTimeHelper.utcNow();

            if (req.query.DeviceName) deviceName = req.query.DeviceName;
            if (req.query.DeviceCode) deviceCode = req.query.DeviceCode;
            if (req.query.DeviceStatus) deviceStatus = req.query.DeviceStatus;
            if (req.query.DeviceType) deviceType = req.query.DeviceType;
            if (req.query.DeviceType2) deviceType2 = req.query.DeviceType2;
            if (req.query.DeviceDescription) deviceDescription = req.query.DeviceDescription;
            if (req.query.DeviceOwnerId) deviceOwnerId = req.query.DeviceOwnerId;
            if (req.query.OwnerId) ownerId = req.query.OwnerId;
            if (req.query.Name) name = req.query.Name;
            if (req.query.Push) push = req.query.Push;
            if (req.query.Sms) sms = req.query.Sms;
            if (req.query.Token) token = req.query.Token;
            if (req.query.Type) type = req.query.Type;
            if (req.query.Resolution) resolution = req.query.Resolution;
            if (req.query.Quality) quality = req.query.Quality;
            if (req.query.Password) password = req.query.Password;
            if (req.query.Description) description = req.query.Description;
            if (req.query.DeviceId) deviceId = req.query.DeviceId;

            if (password){
                hash = cryptHelper.encrypt(req, res, password);
            }

            dbconnectHelper.connectAndQuery(
                req
                , res
                , 'SELECT * FROM  add_entity_device_relationship_with_values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27)'
                , [
                    deviceId
                    , deviceName
                    , deviceCode
                    , deviceStatus
                    , deviceType
                    , deviceType2
                    , deviceDescription
                    , deviceCreateDate
                    , null
                    , deviceOwnerId
                    , ownerId
                    , deviceRelationshipId
                    , null
                    , deviceRelationshipCreateDate
                    , deviceRelationshipValueId
                    , name
                    , push
                    , sms
                    , token
                    , type
                    , resolution
                    , quality
                    , hash
                    , null
                    , createDate
                    , null
                    , description
                ]);
    }else{
        res.send(500);
    }
}