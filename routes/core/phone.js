var dbconnectHelper = require('../../helpers/dbConnect');
var idgenHelper = require('../../helpers/idGen');
var dateTimeHelper = require('../../helpers/dateTime');
exports.getPhone = function(req, res){
    var phoneId = null;
    var phoneDigits = null;
    var digits = null;
    var countryCode = null;
    var code = null;
    var ownerId = null;
    var pageSize = null;
    var skipSize = null;

    if (req.query.PhoneId) phoneId = req.query.PhoneId;
    if (req.query.PhoneDigits) phoneDigits = req.query.PhoneDigits;
    if (req.query.Digits) digits = req.query.Digits;
    if (req.query.CountryCode) countryCode = req.query.CountryCode;
    if (req.query.Code) code = req.query.Code;
    if (req.query.OwnerId) ownerId = req.query.OwnerId;
    if (req.query.PageSize) pageSize = req.query.PageSize;
    if (req.query.SkipSize) skipSize = req.query.SkipSize;

    dbconnectHelper.connectAndQuery(
        req
        , res
        , 'SELECT * FROM  get_phone($1, $2, $3, $4, $5, $6, $7, $8)'
        , [
            phoneId
            , phoneDigits
            , digits
            , countryCode
            , code
            , ownerId
            , pageSize
            , skipSize
        ]);
};
exports.addPhone= function(req, res){
    if (
            req.body.ownerId &&
            req.phoneDigits
        ){

        var phoneDigits = null;
        var digits = null;
        var countryCode = null;
        var code = null;
        var ownerId = null;

        if (req.body.PhoneDigits) phoneDigits = req.body.PhoneDigits;
        if (req.body.Digits) digits = req.body.Digits;
        if (req.body.CountryCode) countryCode = req.body.CoutryCode;
        if (req.body.Code) code = req.body.Code;
        if (req.body.OwnerId) ownerId = req.body.OwnerId;

        var phoneId = idgenHelper.generateId();
        var createDate = dateTimeHelper.utcNow();

        dbconnectHelper.connectAndQuery(
            req
            , res
            , 'SELECT * FROM  add_phone($1, $2, $3, $4, $5, $6, $7, $8)'
            , [
                phoneId
                , phoneDigits
                , digits
                , countryCode
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
exports.deletePhone= function(req, res){
    if (
        req.body.PhoneId &&
        req.body.OwnerId
        ){

        var phoneId = null;
        var ownerId = null;

        if (req.body.PhoneId) phoneId = req.body.PhoneId;
        if (req.body.OwnerId) ownerId = req.body.OwnerId;

        dbconnectHelper.connectAndQuery(
            req
            , res
            , 'SELECT * FROM  delete_phone($1, $2)'
            , [
                phoneId
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
exports.updatePhone = function(req, res){

    if (
        req.body.PhoneId &&
            req.body.OwnerId
        ){
        var phoneId = null;
        var phoneDigits = null;
        var digits = null;
        var countryCode = null;
        var code = null;
        var ownerId = null;

        if (req.body.PhoneId) phoneId = req.body.PhoneId;
        if (req.body.Digits) digits = req.body.Digits;
        if (req.body.PhoneDigits) phoneDigits = req.body.PhoneDigits;
        if (req.body.CountryCode) countryCode = req.body.CountryCode;
        if (req.body.Code) code = req.body.Code;
        if (req.body.OwnerId) ownerId = req.body.OwnerId;

        var lastUpdate = dateTimeHelper.utcNow();

        dbconnectHelper.connectAndQuery(
            req
            , res
            , 'SELECT * FROM  update_phone($1, $2, $3, $4, $5, $6, $7)'
            , [
                phoneId
                , phoneDigits
                , digits
                , countryCode
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