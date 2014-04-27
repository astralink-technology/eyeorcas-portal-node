var dbconnectHelper = require('../../helpers/dbConnect');
var idgenHelper = require('../../helpers/idGen');
var dateTimeHelper = require('../../helpers/dateTime');
exports.getProductValue = function(req, res){
    var productValueId = null;
    var productValueName = null;
    var value = null;
    var value2 = null;
    var value3 = null;
    var valueUnit = null;
    var status = null;
    var type = null;
    var productId = null;
    var pageSize = null;
    var skipSize = null;

    if (req.query.ProductValue) productValue = req.query.ProductValue;
    if (req.query.ProductValueName) productValueName = req.query.ProductValueName;
    if (req.query.Value) value = req.query.Value;
    if (req.query.Value2) value2 = req.query.Value2;
    if (req.query.Value3) value3 = req.query.Value3;
    if (req.query.ValueUnit) valueUnit = req.query.ValueUnit;
    if (req.query.Status) status = req.query.Status;
    if (req.query.Type) type = req.query.Type;
    if (req.query.ProductId) productId = req.query.ProductId;
    if (req.query.PageSize) pageSize = req.query.PageSize;
    if (req.query.SkipSize) skipSize = req.query.SkipSize;

    dbconnectHelper.connectAndQuery(
        req
        , res
        , 'SELECT * FROM  get_product_value($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)'
        , [
            productValueId
            , productValueName
            , value
            , value2
            , value3
            , valueUnit
            , status
            , type
            , productId
            , pageSize
            , skipSize
        ]);
};
exports.addProductValue= function(req, res){
    if (
        req.body.ProductValueName &&
            req.body.ProductId
        ){
        var productValueName = null;
        var value = null;
        var value2 = null;
        var value3 = null;
        var valueUnit = null;
        var status = null;
        var type = null;
        var productId = null;

        var productValueId = idgenHelper.generateId();
        var createDate = dateTimeHelper.utcNow();

        if (req.body.ProductValueName) productValueName = req.body.ProductValueName;
        if (req.body.Value) value = req.body.Value;
        if (req.body.Value2) value2 = req.body.Value2;
        if (req.body.Value3) value3 = req.body.Value3;
        if (req.body.ValueUnit) valueUnit = req.body.ValueUnit;
        if (req.body.Status) status = req.body.Status;
        if (req.body.Type) type = req.body.Type;
        if (req.body.ProductId) productId = req.body.ProductId;

        dbconnectHelper.connectAndQuery(
            req
            , res
            , 'SELECT * FROM  add_product_value($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)'
            , [
                productValueId
                , productValueName
                , value
                , value2
                , value3
                , valueUnit
                , status
                , type
                , createDate
                , null
                , productId
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
exports.deleteProductValue= function(req, res){
    if (
        req.body.ProductValueId
        ){

        var productValueId = null;

        if (req.body.ProductValueId) productValueId = req.body.ProductValueId;

        dbconnectHelper.connectAndQuery(
            req
            , res
            , 'SELECT * FROM  delete_product_value($1)'
            , [
                productValueId
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

exports.updateProductValue = function(req, res){
    if (
        req.body.ProductValueId
        ){
        var productValueId = null;
        var productValueName = null;
        var value = null;
        var value2 = null;
        var value3 = null;
        var valueUnit = null;
        var status = null;
        var type = null;
        var lastUpdate = null;
        var productId = null;

        if (req.body.ProductValueId) productValueId = req.body.ProductValueId;
        if (req.body.ProductValueName) productValueName = req.body.ProductValueName;
        if (req.body.Value) value = req.body.Value;
        if (req.body.Value2) value2 = req.body.Value2;
        if (req.body.Value3) value3 = req.body.Value3;
        if (req.body.ValueUnit) valueUnit = req.body.ValueUnit;
        if (req.body.Status) status = req.body.Status;
        if (req.body.Type) type = req.body.Type;
        if (req.body.ProductId) productId = req.body.ProductId;

        var lastUpdate = dateTimeHelper.utcNow();

        dbconnectHelper.connectAndQuery(
            req
            , res
            , 'SELECT * FROM  update_product($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)'
            , [
                productValueId
                , productValueName
                , value
                , value2
                , value3
                , valueUnit
                , status
                , type
                , lastUpdate
                , productId
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