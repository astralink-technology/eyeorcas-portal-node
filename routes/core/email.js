dbconnectHelper = require('../../helpers/dbConnect');
idgenHelper = require('../../helpers/idGen');
dateTimeHelper = require('../../helpers/dateTime');

exports.getEmail = function(req, res){
    var emailId = null;
    var emailAddress = null;
    var ownerId = null;
    var pageSize = null;
    var skipSize = null;

    if (req.query.EmailId) emailId = req.query.EmailId;
    if (req.query.EmailAddress) emailAddress = req.query.EmailAddress;
    if (req.query.OwnerId) ownerId = req.query.OwnerId;
    if (req.query.PageSize) pageSize = req.query.PageSize;
    if (req.query.SkipSize) skipSize = req.query.SkipSize;

    dbconnectHelper.connectAndQuery(
        req
        , res
        , 'SELECT * FROM  get_email($1, $2, $3, $4, $5)'
        , [
            emailId
            , emailAddress
            , ownerId
            , pageSize
            , skipSize
        ]);
};
exports.addEmail = function(req, res){
    if (
        //specify the required variables for insert to work
        req.body.EmailAddress &&
        req.body.OwnerId
        ){
        var emailAddress = null;
        var ownerId = null;
        var emailId = idgenHelper.generateId();
        var createDate = dateTimeHelper.utcNow();

        if (req.body.EmailAddress) emailAddress = req.body.EmailAddress;
        if (req.body.OwnerId) ownerId = req.body.OwnerId;

        dbconnectHelper.connectAndQuery(
            req
            , res
            , 'SELECT * FROM  add_email($1, $2, $3, $4, $5)'
            , [
                emailId
                , emailAddress
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
exports.deleteEmail= function(req, res){
    if (
    //specify the required variables for delete to work
        req.body.EmailId
        ){
        var emailId = null;
        if (req.body.EmailId) emaiId = req.body.EmailId;
        dbconnectHelper.connectAndQuery(
            req
            , res
            , 'SELECT * FROM  delete_email($1)'
            , [
                emailId
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
exports.updateEmail = function(req, res){
    if (
        //specify the required variables for update to work
        req.body.EmailId
        ){
        var emailId = null;
        var emailAddress = null;
        var ownerId = null;
        var lastUpdate = dateTimeHelper.utcNow();

        if (req.body.EmailId) emaiId = req.body.EmailId;
        if (req.body.EmailAddress) emailAddress = req.body.EmailAddress;
        if (req.body.OwnerId) ownerId = req.body.OwnerId;

        dbconnectHelper.connectAndQuery(
            req
            , res
            , 'SELECT * FROM update_email($1, $2, $3, $4)'
            , [
                emailId
                , emailAddress
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
    req.body;
};