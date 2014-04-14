dbconnectHelper = require('../../helpers/dbConnect');
idgenHelper = require('../../helpers/idGen');
dateTimeHelper = require('../../helpers/dateTime');
exports.getDevice = function(req, res){
    var deviceId = null;
    var name = null;
    var code = null;
    var status = null;
    var type = null;
    var type2 = null;
    var ownerId  = null;
    var pageSize = null;
    var skipSize = null;

    if (req.query.DeviceId) deviceId = req.query.DeviceId;
    if (req.query.Name) name = req.query.Name;
    if (req.query.Code) code = req.query.Code;
    if (req.query.Status) status = req.query.Status;
    if (req.query.Type) type = req.query.Type;
    if (req.query.Type2) type2 = req.query.Type2;
    if (req.query.OwnerId ) ownerId = req.query.OwnerId;
    if (req.query.PageSize) pageSize = req.query.PageSize;
    if (req.query.SkipSize) skipSize = req.query.SkipSize;

    dbconnectHelper.connectAndQuery(
        req
        , res
        , 'SELECT * FROM  get_device($1, $2, $3, $4, $5, $6, $7, $8, $9)'
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
exports.addDevice= function(req, res){
    if (
        req.body.Code
        ){

        var name = null;
        var code = null;
        var status = null;
        var type = null;
        var type2 = null;
        var description = null;
        var ownerId = null;

        if (req.body.Name) name = req.body.Name;
        if (req.body.Code) code = req.body.Code;
        if (req.body.Status) status = req.body.Status;
        if (req.body.Type) type = req.body.Type;
        if (req.body.Type2) type2 = req.body.Type2;
        if (req.body.Description) description = req.body.Description;
        if (req.body.OwnerId) ownerId = req.body.OwnerId;

        var deviceId = idgenHelper.generateId();
        var createDate = dateTimeHelper.utcNow();

        dbconnectHelper.connectAndQuery(
            req
            , res
            , 'SELECT * FROM  add_device($1, $2, $3, $4, $5, $6, $7, $8, $9)'
            , [
                deviceId
                , name
                , code
                , status
                , type
                , type2
                , description
                , createDate
                , null
                , ownerId
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
exports.deleteDevice= function(req, res){
    if (
        req.body.DeviceId
        ){

        var deviceId = null;

        if (req.body.DeviceId) deviceId = req.body.DeviceId;

        dbconnectHelper.connectAndQuery(
            req
            , res
            , 'SELECT * FROM  delete_device($1)'
            , [
                deviceId
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
exports.updateDevice = function(req, res){
    if (
        req.body.DeviceId
        ){

        var deviceId = null;
        var name = null;
        var code = null;
        var status = null;
        var type = null;
        var type2 = null;
        var description = null;
        var ownerId = null;

        if (req.body.DeviceId) deviceId = req.body.DeviceId;
        if (req.body.Name) name = req.body.Name;
        if (req.body.Code) code = req.body.Code;
        if (req.body.Status) status = req.body.Status;
        if (req.body.Type) type = req.body.Type;
        if (req.body.Type2) type2 = req.body.Type2;
        if (req.body.Description) description = req.body.Description;
        if (req.body.OwnerId) ownerId = req.body.OwnerId;

        if (req.body.MessageId) messageId = req.body.MessageId;

        var lastUpdate = dateTimeHelper.utcNow();

        dbconnectHelper.connectAndQuery(
            req
            , res
            , 'SELECT * FROM  update_device($1, $2, $3, $4, $5, $6, $7, $8, $9)'
            , [
                deviceId
                , name
                , code
                , status
                , type
                , type2
                , description
                , lastUpdate
                , ownerId
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