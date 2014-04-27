var dbconnectHelper = require('../../helpers/dbConnect');
var idgenHelper = require('../../helpers/idGen');
var dateTimeHelper = require('../../helpers/dateTime');
exports.getEnterprise = function(req, res){

    var enterpriseId = null;
    var name = null;
    var code = null;
    var pageSize = null;
    var skipSize = null;

    if (req.query.EnterpriseId) enterpriseId = req.query.EnterpriseId;
    if (req.query.Name) name = req.query.Name;
    if (req.query.Code) code = req.query.Code;
    if (req.query.PageSize) pageSize = req.query.PageSize;
    if (req.query.SkipSize) skipSize = req.query.SkipSize;

    dbconnectHelper.connectAndQuery(
        req
        , res
        , 'SELECT * FROM  get_enterprise($1, $2, $3, $4, $5)'
        , [
            enterpriseId 
            , name 
            , code
            , pageSize
            , skipSize
        ]);
};
exports.addEnterprise= function(req, res){
    if (
        req.body.Name
        ){

        var name = null
        var code = null
        var description = null


        if (req.body.Name) name = req.body.Name;
        if (req.body.Code) code = req.body.Code;
        if (req.body.Description) description = req.body.Description;

        var enterpriseId = idgenHelper.generateId();
        var createDate = dateTimeHelper.utcNow();
        dbconnectHelper.connectAndQuery(
            req
            , res
            , 'SELECT * FROM  add_enterprise($1, $2, $3, $4, $5, $6)'
            , [
                enterpriseId
                , name
                , code
                , description
                , createDate
                , null
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
exports.deleteEnterprise= function(req, res){
    if (
        req.body.EnterpriseId
        ){

        var enterpriseId = null;

        if (req.body.EnterpriseId) enterpriseId = req.body.EnterpriseId;

        dbconnectHelper.connectAndQuery(
            req
            , res
            , 'SELECT * FROM  delete_enterprise($1)'
            , [
                enterpriseId
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
exports.updateEnterprise = function(req, res){
    if (
        req.body.EnterpriseId
        ){

        var enterpriseId = null;
        var name = null;
        var code = null;
        var description = null;

        if (req.body.EnterpriseId) enterpriseId = req.body.EnterpriseId;
        if (req.body.Name) name = req.body.Name;
        if (req.body.Code) code = req.body.Code;
        if (req.body.Description) description = req.body.Description;

        var lastUpdate = dateTimeHelper.utcNow();

        dbconnectHelper.connectAndQuery(
            req
            , res
            , 'SELECT * FROM  update_enterprise($1, $2, $3, $4, $5)'
            , [
                enterpriseId
                , name
                , code
                , description
                , lastUpdate
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