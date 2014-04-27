var dbconnectHelper = require('../../helpers/dbConnect');
var idgenHelper = require('../../helpers/idGen');
var dateTimeHelper = require('../../helpers/dateTime');
var cryptHelper = require('../../helpers/crypt');

exports.getDeviceRelationshipValue = function(req, res){
    var deviceRelationshipValueId
    var push
    var name
    var sms
    var token 
    var type 
    var resolution 
    var quality 
    var deviceRelationshipId 
    var pageSize
    var skipSize

    if (req.query.DeviceRelationshipValueId) deviceRelationshipValueId = req.query.DeviceRelationshipValueId;
    if (req.query.Push) push = req.query.Push;
    if (req.query.Name) name = req.query.Name;
    if (req.query.Sms) sms = req.query.Sms;
    if (req.query.Token) token = req.query.Token;
    if (req.query.Type) type = req.query.Type;
    if (req.query.Resolution) resolution = req.query.Resolution;
    if (req.query.Quality) quality = req.query.Quality;
    if (req.query.DeviceRelationshipId) deviceRelationshipId = req.query.DeviceRelationshipId;
    if (req.query.PageSize) pageSize = req.query.PageSize;
    if (req.query.SkipSize) skipSize= req.query.SkipSize;

    dbconnectHelper.connectAndQuery(
        req
        , res
        , 'SELECT * FROM  get_device_relationship_value($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)'
        , [
            deviceRelationshipValueId
            , push
            , name
            , sms
            , token
            , type
            , resolution
            , quality
            , deviceRelationshipId
            , pageSize
            , skipSize
        ]);
};
exports.addDeviceRelationshipValue= function(req, res){
    if (
        req.body.DeviceRelationshipId
        ){

        var deviceRelationshipId = null;
        var push = null;
        var sms = null;
        var token = null;
        var type = null;
        var resolution = null;
        var quality = null;
        var password = null;
        var hash = null;
        var description = null;

        if (req.body.DeviceRelationshipId) deviceRelationshipId = req.body.DeviceRelationshipId;
        if (req.body.Push) push = req.body.Push;
        if (req.body.Sms) sms = req.body.Sms;
        if (req.body.Token) token = req.body.Token;
        if (req.body.Type) type = req.body.Type;
        if (req.body.Resolution) resolution = req.body.Resolution;
        if (req.body.Quality) quality = req.body.Quality;
        if (req.body.Password) password = req.body.Password;
        if (req.body.Description) description = req.body.Description;

        var deviceRelationshipValueId = idgenHelper.generateId();
        var createDate = dateTimeHelper.utcNow();

        if (password){
            hash = cryptHelper.encrypt(req, res, password);
        }

        dbconnectHelper.connectAndQuery(
            req
            , res
            , 'SELECT * FROM  add_device_relationship_value($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)'
            , [
                deviceRelationshipValueId
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
                , deviceRelationshipId
                , description
            ]);
    }else{
        res.json({
            RowsReturned : null,
            Data : null,
            Error : true,
            ErrorDesc : "Internal Server Error - Parameters Required",
            ErrorCode: 500
        })
    };
};
exports.deleteDeviceRelationshipValue= function(req, res){
    if (
        req.body.DeviceRelationshipValueId
        ){

        var deviceRelationshipValueId = null;

        if (req.body.DeviceRelationshipValueId) deviceRelationshipValueId = req.body.DeviceRelationshipValueId;

        dbconnectHelper.connectAndQuery(
            req
            , res
            , 'SELECT * FROM  delete_device_relationship_value($1)'
            , [
                DeviceRelationshipValueId
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
exports.updateDeviceRelationshipValue = function(req, res){
    if (
        req.body.DeviceRelationshipValueId
        ){

        var deviceRelationshipValueId = null;
        var push = null;
        var sms = null;
        var token = null;
        var type = null;
        var resolution = null;
        var quality = null;
        var password = null;
        var deviceRelationshipId = null;
        var description = null;
        var hash = null;
        
        if (req.body.DeviceRelationshipValueId) deviceRelationshipValueId = req.body.DeviceRelationshipValueId;
        if (req.body.Push) push = req.body.Push;
        if (req.body.Sms) sms = req.body.Sms;
        if (req.body.Token) token = req.body.Token;
        if (req.body.Type) type = req.body.Type;
        if (req.body.Resolution) resolution = req.body.Resolution;
        if (req.body.Quality) quality = req.body.Quality;
        if (req.body.Password) password = req.body.Password;
        if (req.body.DeviceRelationshipId) deviceRelationshipId = req.body.DeviceRelationshipId;
        if (req.body.Description) description = req.body.Description;

        var lastUpdate = dateTimeHelper.utcNow();
        if (password){
            hash = cryptHelper.encrypt(req, res, password);
        }

        dbconnectHelper.connectAndQuery(
            req
            , res
            , 'SELECT * FROM  update_device_relationship_value($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)'
            , [
                deviceRelationshipValueId
                , name
                , push
                , sms
                , token
                , type
                , resolution
                , quality
                , hash
                , null
                , lastUpdate
                , deviceRelationshipId
                , description
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