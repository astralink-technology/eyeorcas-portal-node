var dbconnectHelper = require('../../helpers/dbConnect');
var idgenHelper = require('../../helpers/idGen');
var dateTimeHelper = require('../../helpers/dateTime');
exports.getProduct = function(req, res){
    var productId = null;
    var name = null;
    var status = null;
    var type = null;
    var code = null;
    var ownerId = null;
    var pageSize = null;
    var skipSize = null;

    if (req.query.ProductId) productId = req.query.ProductId;
    if (req.query.Name) name = req.query.Name;
    if (req.query.Status) status = req.query.Status;
    if (req.query.Type) type = req.query.Type;
    if (req.query.Code) code = req.query.Code;
    if (req.query.OwnerId) ownerId = req.query.OwnerId;
    if (req.query.PageSize) pageSize = req.query.PageSize;
    if (req.query.SkipSize) skipSize = req.query.SkipSize;

    dbconnectHelper.connectAndQuery(
        req
        , res
        , 'SELECT * FROM  get_product($1, $2, $3, $4, $5, $6, $7, $8)'
        , [
            productId
            , name
            , status
            , type
            , code
            , ownerId
            , pageSize
            , skipSize
        ]);
};
exports.addProduct= function(req, res){
    if (
        req.body.ProductName &&
            req.body.OwnerId
        ){

        var name = null;
        var description = null;
        var status = null;
        var type = null;
        var code = null;
        var ownerId = null;

        var productId = idgenHelper.generateId();
        var createDate = dateTimeHelper.utcNow();

        if (req.body.Name) name = req.body.Name;
        if (req.body.Description) description = req.body.Description;
        if (req.body.Status) status = req.body.Status;
        if (req.body.Type) type = req.body.Type;
        if (req.body.Code) code = req.body.Code;
        if (req.body.OwnerId) ownerId = req.body.OwnerId;

        dbconnectHelper.connectAndQuery(
            req
            , res
            , 'SELECT * FROM  add_product($1, $2, $3, $4, $5, $6, $7, $8, $9)'
            , [
                productId
                , name
                , description
                , status
                , type
                , code
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
exports.deleteProduct= function(req, res){
    if (
        req.body.ProductId
        ){

        var productId = null;

        var lastUpdate = dateTimeHelper.utcNow();

        if (req.body.ProductId) productId = req.body.ProductId;

        dbconnectHelper.connectAndQuery(
            req
            , res
            , 'SELECT * FROM  delete_product($1)'
            , [
                productId
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
exports.updateProduct = function(req, res){
    if (
        req.body.ProductId
        ){

        var productId = null;
        var name = null;
        var description = null;
        var status = null;
        var type = null;
        var code = null;
        var ownerId = null;

        var lastUpdate = dateTimeHelper.utcNow();

        if (req.body.ProductId) productId = req.body.ProductId;
        if (req.body.Name) name = req.body.Name;
        if (req.body.Description) description = req.body.Description;
        if (req.body.Status) status = req.body.Status;
        if (req.body.Type) type = req.body.Type;
        if (req.body.Code) code = req.body.Code;
        if (req.body.OwnerId) ownerId = req.body.OwnerId;

        dbconnectHelper.connectAndQuery(
            req
            , res
            , 'SELECT * FROM  update_product($1, $2, $3, $4, $5, $6, $7, $8)'
            , [
                productId
                , name
                , description
                , status
                , type
                , code
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