dbconnectHelper = require('../../helpers/dbConnect');
idgenHelper = require('../../helpers/idGen');
dateTimeHelper = require('../../helpers/dateTime');
exports.getEntity = function(req, res){
    var entityId = null;
    var authenticationId  = null;
    var pageSize = null;
    var skipSize = null;

    if (req.query.EntityId) entityId = req.query.EntityId;
    if (req.query.AuthenticationId) authenticationId = req.query.AuthenticationId;
    if (req.query.PageSize) pageSize = req.query.PageSize;
    if (req.query.SkipSize) skipSize = req.query.SkipSize;

    dbconnectHelper.connectAndQuery(
        req
        , res
        , 'SELECT * FROM  get_entity($1, $2, $3, $4)'
        , [
            entityId
            , authenticationId
            , pageSize
            , skipSize
        ]);
};
exports.getEntityDetail = function(req, res){
    var entityId = null;
    var authenticationId  = null;
    var pageSize = null;
    var skipSize = null;

    if (req.query.EntityId) entityId = req.query.EntityId;
    if (req.query.AuthenticationId) authenticationId = req.query.AuthenticationId;
    if (req.query.PageSize) pageSize = req.query.PageSize;
    if (req.query.SkipSize) skipSize = req.query.SkipSize;

    dbconnectHelper.connectAndQuery(
        req
        , res
        , 'SELECT * FROM  get_admin_entity_detail($1, $2, $3, $4)'
        , [
            entityId
            , authenticationId
            , pageSize
            , skipSize
        ]);
}
exports.addEntity= function(req, res){
    if (
        req.body.AuthenticationId &&
        req.body.FirstName &&
        req.body.LastName
        ){

        var firstName = null
        var lastName = null
        var name = null
        var nickName = null
        var status = null
        var approved = null
        var type = null
        var authenticationId = null
        var emailId = null
        var phoneId = null

        if (req.body.FirstName) firstName = req.body.FirstName;
        if (req.body.LastName) lastName = req.body.LastName;
        if (req.body.NickName) nickName = req.body.NickName;
        if (req.body.Name) name = req.body.Name;
        if (req.body.Status) status = req.body.Status;
        if (req.body.Approved) approved = req.body.Approved;
        if (req.body.Type) type = req.body.Type;
        if (req.body.AuthenticationId) authenticationId = req.body.AuthenticationId;
        if (req.body.EmailId) emailId = req.body.EmailId;
        if (req.body.PhoneId) phoneId = req.body.PhoneId;

        var entityId = idgenHelper.generateId();
        var createDate = dateTimeHelper.utcNow();

        dbconnectHelper.connectAndQuery(
            req
            , res
            , 'SELECT * FROM  add_entity($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)'
            , [
                entityId
                , firstName
                , lastName
                , nickName
                , name
                , status
                , approved
                , type
                , createDate
                , null
                , authenticationId
                , emailId
                , phoneId
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
exports.deleteEntity= function(req, res){
    if (
        req.body.EntityId
        ){

        var entityId = null;

        if (req.body.EntityId) entityId = req.body.EntityId;

        dbconnectHelper.connectAndQuery(
            req
            , res
            , 'SELECT * FROM  delete_entity($1)'
            , [
                imageId
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
exports.updateEntity = function(req, res){
    if (
        req.body.EntityId
        ){

        var entityId = null;
        var firstName = null
        var lastName = null
        var name = null
        var nickName = null
        var status = null
        var approved = null
        var type = null
        var authenticationId = null
        var emailId = null
        var phoneId = null

        if (req.body.EntityId) entityId = req.body.EntityId;
        if (req.body.FirstName) firstName = req.body.FirstName;
        if (req.body.LastName) lastName = req.body.LastName;
        if (req.body.NickName) nickName = req.body.NickName;
        if (req.body.Name) name = req.body.Name;
        if (req.body.Status) status = req.body.Status;
        if (req.body.Approved) approved = req.body.Approved;
        if (req.body.Type) type = req.body.Type;
        if (req.body.AuthenticationId) authenticationId = req.body.AuthenticationId;
        if (req.body.EmailId) emailId = req.body.EmailId;
        if (req.body.PhoneId) phoneId = req.body.PhoneId;

        var lastUpdate = dateTimeHelper.utcNow();

        dbconnectHelper.connectAndQuery(
            req
            , res
            , 'SELECT * FROM  update_entity($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)'
            , [
                entityId
                , firstName
                , lastName
                , nickName
                , name
                , status
                , approved
                , type
                , lastUpdate
                , authenticationId
                , emailId
                , phoneId
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