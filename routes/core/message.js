dbconnectHelper = require('../../helpers/dbConnect');
idgenHelper = require('../../helpers/idGen');
dateTimeHelper = require('../../helpers/dateTime');
exports.getMessage = function(req, res){
    var messageId = null;
    var message = null;
    var type = null;
    var ownerId = null;
    var triggerName = null;
    var pageSize = null;
    var skipSize = null;

    if (req.query.MessageId) messageId = req.query.MessageId;
    if (req.query.Message) message = req.query.Message;
    if (req.query.Type) type = req.query.Type;
    if (req.query.OwnerId) ownerId = req.query.OwnerId;
    if (req.query.TriggerName) triggerName = req.query.TriggerName;
    if (req.query.PageSize) pageSize = req.query.PageSize;
    if (req.query.SkipSize) skipSize = req.query.SkipSize;

    dbconnectHelper.connectAndQuery(
        req
        , res
        , 'SELECT * FROM  get_message($1, $2, $3, $4, $5, $6, $7)'
        , [
            messageId
            , message
            , type
            , ownerId
            , triggerName
            , pageSize
            , skipSize
        ]);
};
exports.addMessage= function(req, res){
    if (
        req.body.OwnerId &&
            req.body.Message
        ){

        var message = null;
        var type = null;
        var ownerId = null;
        var triggerEvent = null;
        var subject = null;

        if (req.body.Message) message = req.body.Message;
        if (req.body.Type) type = req.body.Type;
        if (req.body.OwnerId) ownerId = req.body.OwnerId;
        if (req.body.TriggerEvent) triggerEvent = req.body.TriggerEvent;
        if (req.body.Subject) subject = req.body.Subject;

        var messageId = idgenHelper.generateId();
        var createDate = dateTimeHelper.utcNow();

        dbconnectHelper.connectAndQuery(
            req
            , res
            , 'SELECT * FROM  add_message($1, $2, $3, $4, $5, $6, $7, $8)'
            , [
                messageId
                , message
                , type
                , createDate
                , null
                , ownerId
                , triggerEvent
                , subject
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
exports.deleteMessage= function(req, res){
    if (
        req.body.MessageId
        ){

        var messageId = null;

        if (req.body.MessageId) messageId = req.body.MessageId;

        dbconnectHelper.connectAndQuery(
            req
            , res
            , 'SELECT * FROM  delete_message($1)'
            , [
                messageId
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
exports.updateMessage = function(req, res){
    if (
        req.body.MessageId &&
            req.body.OwnerId
        ){

        var messageId = null;
        var type = null;
        var message = null;
        var ownerId = null;
        var triggerEvent = null;
        var subject = null;

        if (req.body.MessageId) messageId = req.body.MessageId;
        if (req.body.Type) type = req.body.Type;
        if (req.body.Message) message = req.body.Message;
        if (req.body.TriggerEvent) triggerEvent = req.body.TriggerEvent;
        if (req.body.OwnerId) ownerId = req.body.OwnerId;
        if (req.body.Subject) subject = req.body.Subject;

        var lastUpdate = dateTimeHelper.utcNow();

        dbconnectHelper.connectAndQuery(
            req
            , res
            , 'SELECT * FROM  update_message($1, $2, $3, $4, $5, $6, $7)'
            , [
                messageId
                , message
                , type
                , lastUpdate
                , ownerId
                , triggerEvent
                , subject
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