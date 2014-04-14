dbconnectHelper = require('../../helpers/dbConnect');
idgenHelper = require('../../helpers/idGen');
dateTimeHelper = require('../../helpers/dateTime');

exports.getDeviceRelationship = function(req, res){
    var deviceRelationshipId = null;
    var deviceId = null;
    var ownerId  = null;
    var messageTriggerEvent = null;
    var pageSize = null;
    var skipSize = null;

    if (req.query.DeviceRelationshipId) deviceRelationshipId = req.query.DeviceRelationshipId;
    if (req.query.DeviceId) deviceId = req.query.DeviceId;
    if (req.query.OwnerId) ownerId = req.query.OwnerId;
    if (req.query.MessageTriggerEvent) messageTriggerEvent= req.query.MessageTriggerEvent;
    if (req.query.PageSize) pageSize = req.query.PageSize;
    if (req.query.SkipSize) skipSize= req.query.SkipSize;

    dbconnectHelper.connectAndQuery(
        req
        , res
        , 'SELECT * FROM  get_device_relationship($1, $2, $3, $4, $5, $6)'
        , [
            deviceRelationshipId
            , deviceId
            , ownerId
            , messageTriggerEvent
            , pageSize
            , skipSize
        ]);
};
exports.addDeviceRelationship= function(req, res){
    if (
            req.body.deviceId &&
            req.body.ownerId
        ){
        var deviceId = null;
        var ownerId  = null;
        var appName = null;

        if (req.query.DeviceId) deviceId = req.query.DeviceId;
        if (req.query.OwnerId) ownerId = req.query.OwnerId;
        if (req.query.AppName) appName = req.query.AppName;

        var deviceRelationshipId = idgenHelper.generateId();
        var createDate = dateTimeHelper.utcNow();

        dbconnectHelper.connectAndQuery(
            req
            , res
            , 'SELECT * FROM  add_device_relationship($1, $2, $3, $4, $5, $6)'
            , [
                deviceRelationshipId
                , deviceId
                , ownerId
                , null
                , createDate
                , appName
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
exports.deleteDeviceRelationship= function(req, res){
    if (
        req.body.DeviceRelationshipId
        ){

        var deviceRelationshipId = null;

        if (req.body.DeviceRelationshipId) deviceRelationshipId = req.body.DeviceRelationshipId;

        dbconnectHelper.connectAndQuery(
            req
            , res
            , 'SELECT * FROM  delete_device_relationship($1)'
            , [
                deviceRelationshipId
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
exports.updateDeviceRelationship = function(req, res){
    if (
        req.body.DeviceRelationshipid &&
        req.body.OwnerId &&
        req.body.DeviceId
        ){

        var deviceRelationshipId = null;
        var deviceId = null;
        var ownerId  = null;
        var appName  = null;

        if (req.body.DeviceRelationshipId) deviceRelationshipId = req.body.DeviceRelationshipId;
        if (req.body.OwnerId) ownerId = req.body.OwnerId;
        if (req.body.DeviceId) deviceId = req.body.DeviceId;
        if (req.body.AppName) appName = req.body.AppName;

        var lastUpdate = dateTimeHelper.utcNow();

        dbconnectHelper.connectAndQuery(
            req
            , res
            , 'SELECT * FROM  updateDeviceRelationship($1, $2, $3, $4, $5)'
            , [
                deviceRelationshipId
                , deviceId
                , ownerId
                , lastUpdate
                , appName
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