dbconnectHelper = require('../../helpers/dbConnect');
idgenHelper = require('../../helpers/idGen');
dateTimeHelper = require('../../helpers/dateTime');
cryptHelper = require('../../helpers/crypt');
exports.getDeviceValue = function(req, res){
    var deviceId = null;
    var connectedDeviceId = null;
    var status = null;
    var pageSize = null;
    var skipSize = null;

    if (req.query.DeviceId) deviceId = req.query.DeviceId;
    if (req.query.ConnectedDeviceId) connectedDeviceId = req.query.ConnectedDeviceId;
    if (req.query.Status) status = req.query.Status;
    if (req.query.PageSize) pageSize = req.query.PageSize;
    if (req.query.SkipSize) skipSize= req.query.SkipSize;

    dbconnectHelper.connectAndQuery(
        req
        , res
        , 'SELECT * FROM  get_device_session($1, $2, $3, $4, $5)'
        , [
            deviceId
            , connectedDeviceId
            , status
            , pageSize
            , skipSize
        ]);
};
exports.addDeviceValue= function(req, res){
    if (
        req.body.DeviceId
        ){

        var deviceId = null;
        var push = null;
        var sms = null;
        var token = null;
        var type = null;
        var resolution = null;
        var quality = null;
        var password = null;
        var description = null;
        var locationName = null;
        var latitude = null;
        var longitude = null;
        var appVersion = null;
        var firmwareVersion = null;

        var hash = null;
        
        if (req.body.DeviceId) deviceId = req.body.DeviceId;
        if (req.body.Push) push = req.body.Push;
        if (req.body.Sms) sms = req.body.Sms;
        if (req.body.Token) token = req.body.Token;
        if (req.body.Type) type = req.body.Type;
        if (req.body.Resolution) resolution = req.body.Resolution;
        if (req.body.Quality) quality = req.body.Quality;
        if (req.body.Password) password = req.body.Password;
        if (req.body.Description) description = req.body.Description;
        if (req.body.LocationName) locationName = req.body.LocationName;
        if (req.body.Latitude) latitude = req.body.Latitude;
        if (req.body.Longitude) longitude = req.body.Longitude;
        if (req.body.AppVersion) appVersion = req.body.AppVersion;
        if (req.body.FirmwareVersion) firmwareVersion = req.body.FirmwareVersion;

        var deviceValueId = idgenHelper.generateId();
        var createDate = dateTimeHelper.utcNow();

        if (password){
            hash = cryptHelper.encrypt(req, res, password)
        }
        dbconnectHelper.connectAndQuery(
            req
            , res
            , 'SELECT * FROM  add_device_value($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18)'
            , [
                deviceValueId
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
                , deviceId
                , description
                , locationName
                , latitude
                , longitude
                , appVersion
                , firmwareVersion
            ]);
    }else{
        res.json({
            RowsReturned : null,
            Data : null,
            Error : true,
            ErrorDesc : "Internal Server Error - Parameters Required",
            ErrorCode: 500
        })
    }
};
exports.deleteDeviceValue= function(req, res){
    if (
        req.body.DeviceId &&
        req.body.DeviceValueId
        ){

        var deviceId = null;
        var deviceValueId = null;

        if (req.body.DeviceId) deviceId = req.body.DeviceId;
        if (req.body.DeviceValueId) deviceValueId = req.body.DeviceValueId;

        dbconnectHelper.connectAndQuery(
            req
            , res
            , 'SELECT * FROM  delete_device_value($1, $2)'
            , [
                deviceId
                , deviceValueId
            ]);
    }else{
        res.json({
            RowsReturned : null,
            Data : null,
            Error : true,
            ErrorDesc : "Internal Server Error - Parameters Required",
            ErrorCode: 500
        })
    }
};
exports.updateDeviceValue = function(req, res){
    if (
        req.body.DeviceValueId &&
        req.body.DeviceId
        ){

        var deviceValueId = null;
        var deviceId = null;
        var push = null;
        var sms = null;
        var token = null;
        var type = null;
        var resolution = null;
        var quality = null;
        var password = null;
        var description = null;
        var locationName = null;
        var latitude = null;
        var longitude = null;
        var appVersion = null;
        var firmwareVersion = null;

        var hash = null;

        if (req.body.DeviceValueId) deviceValueId = req.body.DeviceValueId;
        if (req.body.DeviceId) deviceId = req.body.DeviceId;
        if (req.body.Push) push = req.body.Push;
        if (req.body.Sms) sms = req.body.Sms;
        if (req.body.Token) token = req.body.Token;
        if (req.body.Type) type = req.body.Type;
        if (req.body.Resolution) resolution = req.body.Resolution;
        if (req.body.Quality) quality = req.body.Quality;
        if (req.body.Password) password = req.body.Password;
        if (req.body.Description) description = req.body.Description;
        if (req.body.LocationName) locationName = req.body.LocationName;
        if (req.body.Latitude) latitude = req.body.Latitude;
        if (req.body.Longitude) longitude = req.body.Longitude;
        if (req.body.AppVersion) appVersion = req.body.AppVersion;
        if (req.body.FirmwareVersion) firmwareVersion = req.body.FirmwareVersion;

        if (password){
            hash = cryptHelper.encrypt(req, res, password)
        }

        var lastUpdate = dateTimeHelper.utcNow();

        dbconnectHelper.connectAndQuery(
            req
            , res
            , 'SELECT * FROM  update_device_value($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)'
            , [
                deviceValueId
                , push
                , sms
                , token
                , type
                , resolution
                , quality
                , hash
                , null
                , lastUpdate
                , deviceId
                , description
                , locationName
                , latitude
                , longitude
                , appVersion
                , firmwareVersion
            ]);
    }else{
        res.json({
            RowsReturned : null,
            Data : null,
            Error : true,
            ErrorDesc : "Internal Server Error - Parameters Required",
            ErrorCode: 500
        })
    }
};