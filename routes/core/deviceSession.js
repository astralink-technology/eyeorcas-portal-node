var dbconnectHelper = require('../../helpers/dbConnect');
var idgenHelper = require('../../helpers/idGen');
var dateTimeHelper = require('../../helpers/dateTime');
exports.getDeviceSession = function(req, res){
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
exports.addDeviceSession= function(req, res){
    if (
        req.body.DeviceId &&
        req.body.ConnectedDeviceId
        ){

        var deviceId = null;
        var connectedDeviceId = null;
        var status = null;

        if (req.body.DeviceId) deviceId = req.body.DeviceId;
        if (req.body.ConnectedDeviceId) connectedDeviceId = req.body.ConnectedDeviceId;
        if (req.body.Status) status = req.body.Status;

        var createDate = dateTimeHelper.utcNow();

        dbconnectHelper.connectAndQuery(
            req
            , res
            , 'SELECT * FROM  add_device_session($1, $2, $3, $4)'
            , [
                deviceId
                , connectedDeviceId
                , status
                , createDate
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
exports.deleteDeviceSession= function(req, res){
    if (
        req.body.DeviceId
        ){

        var deviceId = null;

        if (req.body.DeviceId) deviceId = req.body.DeviceId;

        dbconnectHelper.connectAndQuery(
            req
            , res
            , 'SELECT * FROM  delete_device_session($1)'
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
exports.updateDeviceSession = function(req, res){
    if (
        req.body.DeviceId &&
        req.body.ConnectedDeviceId
        ){

        var deviceId = null;
        var connectedDeviceId = null;
        var status = null;

        if (req.body.DeviceId) deviceId = req.body.DeviceId;
        if (req.body.ConnectedDeviceId) connectedDeviceId = req.body.ConnectedDeviceId;
        if (req.body.Status) status = req.body.Status;

        dbconnectHelper.connectAndQuery(
            req
            , res
            , 'SELECT * FROM  update_device_session($1, $2, $3)'
            , [
                deviceId
                , connectedDeviceId
                , status
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