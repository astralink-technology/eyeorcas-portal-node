dbconnectHelper = require('../../helpers/dbConnect');
idgenHelper = require('../../helpers/idGen');
dateTimeHelper = require('../../helpers/dateTime');
exports.getProductRegistration = function(req, res){
    var productRegistrationId = null;
    var status = null;
    var type = null;
    var productId = null;
    var ownerId = null;
    var pageSize = null;
    var skipSize = null;

    if (req.query.ProductRegistrationId) productRegistrationId = req.query.ProductRegistrationId;
    if (req.query.Status) status = req.query.Status;
    if (req.query.Type) type = req.query.Type;
    if (req.query.ProductId) productId = req.query.ProductId;
    if (req.query.OwnerId) ownerId = req.query.OwnerId;
    if (req.query.PageSize) pageSize = req.query.PageSize;
    if (req.query.SkipSize) skipSize = req.query.SkipSize;

    dbconnectHelper.connectAndQuery(
        req
        , res
        , 'SELECT * FROM  get_product_registration($1, $2, $3, $4, $5, $6, $7)'
        , [
            productRegistrationId
            , status
            , type
            , productId
            , ownerId
            , pageSize
            , skipSize
        ]);
};
exports.addProductRegistration= function(req, res){
    if (
        req.body.ProductId &&
        req.body.OwnerId
        ){

        var status = null;
        var type = null;
        var productId = null;
        var ownerId = null;

        if (req.query.Status) status = req.query.Status;
        if (req.query.Type) type = req.query.Type;
        if (req.query.ProductId) productId = req.query.ProductId;
        if (req.query.OwnerId) ownerId = req.query.OwnerId;

        var productRegistrationId = idgenHelper.generateId();
        var createDate = dateTimeHelper.utcNow();

        dbconnectHelper.connectAndQuery(
            req
            , res
            , 'SELECT * FROM  add_product_registration($1, $2, $3, $4, $5, $6, $7)'
            , [
                productRegistrationId
                , status
                , type
                , createDate
                , null
                , productId
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
exports.deleteProductRegistration= function(req, res){
    if (
        req.body.ProductRegistrationId
        ){

        var productRegistrationId = null;

        if (req.query.ProductRegistrationId) productRegistrationId = req.query.ProductRegistrationId;

        dbconnectHelper.connectAndQuery(
            req
            , res
            , 'SELECT * FROM  delete_product_registration($1)'
            , [
                productRegistrationId
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
exports.updateProductRegistration = function(req, res){
    if (
        req.body.ProductRegistrationId
        ){

        var productRegistrationId = null;
        var status = null;
        var type = null;
        var productId = null;
        var ownerId= null;

        if (req.query.ProductRegistrationId) productRegistrationId = req.query.ProductRegistrationId;
        if (req.query.Status) status = req.query.Status;
        if (req.query.Type) type = req.query.Type;
        if (req.query.ProductId) productId = req.query.ProductId;
        if (req.query.OwnerId) ownerId = req.query.OwnerId;

        var lastUpdate = dateTimeHelper.utcNow();

        dbconnectHelper.connectAndQuery(
            req
            , res
            , 'SELECT * FROM  update_product_registration($1, $2, $3, $4, $5, $6)'
            , [
                productRegistrationId
                , status
                , type
                , lastUpdate
                , productId
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