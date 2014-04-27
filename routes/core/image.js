var dbconnectHelper = require('../../helpers/dbConnect');
var idgenHelper = require('../../helpers/idGen');
var dateTimeHelper = require('../../helpers/dateTime');
exports.getImage = function(req, res){

    var imageId = null;
    var title = null;
    var type = null;
    var filename = null;
    var imageUrl = null;
    var status = null;
    var fileType = null;
    var ownerId = null;
    var pageSize = null;
    var skipSize = null;

    if (req.query.ImageId) imageId = req.query.ImageId;
    if (req.query.Title) title = req.query.Title;
    if (req.query.Type) type = req.query.Type;
    if (req.query.FileName) filename = req.query.FileName;
    if (req.query.ImageUrl) imageUrl = req.query.ImageUrl;
    if (req.query.Status) status = req.query.Status;
    if (req.query.FileType) fileType = req.query.FileType;
    if (req.query.OwnerId) ownerId = req.query.OwnerId;
    if (req.query.PageSize) pageSize = req.query.PageSize;
    if (req.query.SkipSize) skipSize = req.query.SkipSize;

    dbconnectHelper.connectAndQuery(
        req
        , res
        , 'SELECT * FROM  get_image($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)'
        , [
            imageId
            , title
            , type
            , filename
            , imageUrl
            , status
            , fileType
            , ownerId
            , pageSize
            , skipSize
        ]);
};
exports.addImage= function(req, res){
    if (
        req.body.OwnerId &&
        req.imageUrl
        ){

        var title = null;
        var type = null;
        var fileName = null;
        var imgUrl = null;
        var status = null;
        var description = null;
        var fileType = null;
        var fileSize = null;
        var ownerId = null;


        if (req.body.Title) title = req.body.Title;
        if (req.body.Type) type = req.body.Type;
        if (req.body.FileName) fileName = req.body.FileName;
        if (req.body.ImgUrl) imgUrl = req.body.ImgUrl;
        if (req.body.Status) status  = req.body.Status;
        if (req.body.Description) description = req.body.Description;
        if (req.body.FileType) fileType = req.body.FileType;
        if (req.body.FileSize) fileSize = req.body.FileSize;
        if (req.body.OwnerId) ownerId = req.body.OwnerId;

        var imageId = idgenHelper.generateId();
        var createDate = dateTimeHelper.utcNow();

        dbconnectHelper.connectAndQuery(
            req
            , res
            , 'SELECT * FROM  add_image($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)'
            , [
                imageId
                , title
                , type
                , fileName
                , imgUrl
                , status
                , createDate
                , description
                , fileType
                , ownerId
                , fileSize
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
exports.deleteImage= function(req, res){
    if (
        req.body.ImageId
        ){

        var imageId = null;

        if (req.body.ImageId) imageId = req.body.ImageId;

        dbconnectHelper.connectAndQuery(
            req
            , res
            , 'SELECT * FROM  delete_image($1)'
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
exports.updateImage = function(req, res){
    if (
        req.body.ImageId &&
        req.body.OwnerId
        ){

        var imageId = null;
        var title = null;
        var type = null;
        var fileName = null;
        var imgUrl = null;
        var status = null;
        var description = null;
        var fileType = null;
        var fileSize = null;
        var ownerId = null;


        if (req.body.ImageId) imageId = req.body.ImageId;
        if (req.body.Title) title = req.body.Title;
        if (req.body.Type) type = req.body.Type;
        if (req.body.FileName) fileName = req.body.FileName;
        if (req.body.ImgUrl) imgUrl = req.body.ImgUrl;
        if (req.body.Status) status = req.body.Status;
        if (req.body.Description) description = req.body.Description;
        if (req.body.FileType) fileType = req.body.FileType;
        if (req.body.FileSize) fileSize = req.body.FileSize;
        if (req.body.OwnerId) ownerId = req.body.OwnerId;

        dbconnectHelper.connectAndQuery(
            req
            , res
            , 'SELECT * FROM  update_image($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)'
            , [
                imageId
                , title
                , type
                , fileName
                , imgUrl
                , status
                , description
                , fileType
                , ownerId
                , fileSize
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