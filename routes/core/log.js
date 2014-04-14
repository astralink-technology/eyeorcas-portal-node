dbconnectHelper = require('../../helpers/dbConnect');
idgenHelper = require('../../helpers/idGen');
dateTimeHelper = require('../../helpers/dateTime');
exports.getLog = function(req, res){
    var logId = null;
    var message = null;
    var title = null;
    var type = null;
    var logUrl = null;
    var status = null;
    var ownerId = null;
    var pageSize = null;
    var skipSize = null;
    var snapshotValue1 = null;
    var snapshotValue2 = null;

    if (req.query.LogId) logId = req.query.LogId;
    if (req.query.Message) message = req.query.Message;
    if (req.query.Title) title = req.query.Title;
    if (req.query.Type) type = req.query.Type;
    if (req.query.LogUrl) logUrl = req.query.LogUrl;
    if (req.query.Status) status = req.query.Status;
    if (req.query.OwnerId) ownerId = req.query.OwnerId;
    if (req.query.PageSize) pageSize = req.query.PageSize;
    if (req.query.SkipSize) skipSize = req.query.SkipSize;

    dbconnectHelper.connectAndQuery(
        req
        , res
        , 'SELECT * FROM  get_log($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)'
        , [
            logId
            , message
            , title
            , type
            , logUrl
            , status
            , ownerId
            , pageSize
            , skipSize
            , snapshotValue1
            , snapshotValue2
        ]);
};
exports.addLog= function(req, res){
    if (
        req.body.Message &&
            req.body.OwnerId
        ){

        var message = null;
        var title = null;
        var type = null;
        var logUrl = null;
        var status = null;
        var ownerId = null;
        var snapshotValue1 = null;
        var snapshotValue2 = null;

        if (req.body.Message) message = req.body.Message;
        if (req.body.Title) title = req.body.Title;
        if (req.body.Type) type = req.body.Type;
        if (req.body.LogUrl) logUrl = req.body.LogUrl;
        if (req.body.Status) status = req.body.Status;
        if (req.body.OwnerId) ownerId = req.body.OwnerId;
        if (req.body.SnapshotValue1) snapshotValue1 = req.body.SnapshotValue1;
        if (req.body.SnapshotValue2) snapshotValue2 = req.body.SnapshotValue2;

        var createDate = dateTimeHelper.utcNow();
        var logId = idgenHelper.generateId();

        dbconnectHelper.connectAndQuery(
            req
            , res
            , 'SELECT * FROM  add_media($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)'
            , [
                logId
                , message
                , title
                , type
                , logUrl
                , status
                , createDate
                , ownerId
                , snapshotValue1
                , snapshotValue2
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
exports.deleteLog= function(req, res){
    if (
        req.body.LogId
        ){

        var logId = null;

        if (req.body.LogId) logId = req.body.LogId;

        dbconnectHelper.connectAndQuery(
            req
            , res
            , 'SELECT * FROM  delete_log($1)'
            , [
                logId
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
exports.updateLog = function(req, res){
        if (
            req.body.LogId &&
            req.body.OwnerId
            ){

            var ownerId = null;
            var message = null;
            var title = null;
            var type = null;
            var logUrl = null;
            var status = null;
            var ownerId = null;
            var snapshotValue1 = null;
            var snapshotValue2 = null;

            if (req.body.LogId) logId = req.body.LogId;
            if (req.body.Message) message = req.body.Message;
            if (req.body.Title) title = req.body.Title;
            if (req.body.Type) type = req.body.Type;
            if (req.body.LogUrl) logUrl = req.body.LogUrl;
            if (req.body.Status) status = req.body.Status;
            if (req.body.OwnerId) ownerId = req.body.OwnerId;
            if (req.body.SnapshotValue1) snapshotValue1 = req.body.SnapshotValue1;
            if (req.body.SnapshotValue2) snapshotValue2 = req.body.SnapshotValue2;

            dbconnectHelper.connectAndQuery(
                req
                , res
                , 'SELECT * FROM  update_log($1, $2, $3, $4, $5, $6, $7, $8, $9)'
                , [
                    logId
                    , message
                    , title
                    , type
                    , logUrl
                    , status
                    , ownerId
                    , snapshotValue1
                    , snapshotValue2
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