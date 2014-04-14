dbconnectHelper = require('../../helpers/dbConnect');
idgenHelper = require('../../helpers/idGen');
dateTimeHelper = require('../../helpers/dateTime');
exports.getMedia = function(req, res){
    var mediaId = null;
    var title = null;
    var type = null;
    var fileName = null;
    var mediaUrl = null;
    var status = null;
    var fileType = null;
    var ownerId = null;
    var pageSize = null;
    var skipSize = null;

    if (req.query.MediaId) mediaId = req.query.MediaId;
    if (req.query.Title) title = req.query.Title;
    if (req.query.Type) type = req.query.Type;
    if (req.query.FileName) fileName = req.query.FileName;
    if (req.query.FileType) fileType = req.query.FileType;
    if (req.query.MediaUrl) mediaUrl = req.query.MediaUrl;
    if (req.query.Status) status = req.query.Status;
    if (req.query.OwnerId) ownerId = req.query.OwnerId;
    if (req.query.PageSize) pageSize = req.query.PageSize;
    if (req.query.SkipSize) skipSize = req.query.SkipSize;

    dbconnectHelper.connectAndQuery(
        req
        , res
        , 'SELECT * FROM  get_media($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)'
        , [
            mediaId
            , title
            , type
            , fileName
            , mediaUrl
            , status
            , fileType
            , ownerId
            , pageSize
            , skipSize
        ]);
};
exports.addMedia= function(req, res){
    if (
        req.body.MediaUrl &&
            req.body.Title
        ){

        var title = null;
        var type = null;
        var fileName= null;
        var mediaUrl = null;
        var status = null;
        var description = null;
        var fileType = null;
        var imgUrl = null;
        var imgUrl2 = null;
        var imgUrl3 = null;
        var imgUrl4 = null;
        var ownerId = null;
        var fileSize = null;

        if (req.body.Title) title = req.body.Title;
        if (req.body.FileName) fileName = req.body.FileName;
        if (req.body.MediaUrl) mediaUrl = req.body.MediaUrl;
        if (req.body.Status) status = req.body.Status;
        if (req.body.Description) description = req.body.Description;
        if (req.body.FileType) fileType = req.body.FileType;
        if (req.body.ImgUrl) imgUrl = req.body.ImgUrl;
        if (req.body.ImgUrl2) imgUrl2 = req.body.ImgUrl2;
        if (req.body.ImgUrl3) imgUrl3 = req.body.ImgUrl3;
        if (req.body.ImgUrl4) imgUrl4 = req.body.ImgUrl4;
        if (req.body.FileSize) fileSize = req.body.FileSize;

        var createDate = dateTimeHelper.utcNow();
        var mediaId = idgenHelper.generateId();

        dbconnectHelper.connectAndQuery(
            req
            , res
            , 'SELECT * FROM  add_media($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)'
            , [
                mediaId
                , title
                , type
                , fileName
                , mediaUrl
                , status
                , createDate
                , description
                , fileType
                , imgUrl
                , imgUrl2
                , imgUrl3
                , imgUrl4
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
exports.deleteMedia= function(req, res){
    if (
        req.body.MediaId
        ){
        var mediaId = null;

        if (req.body.MediaId) mediaId = req.body.MediaId;

        dbconnectHelper.connectAndQuery(
            req
            , res
            , 'SELECT * FROM  delete_media($1)'
            , [
                mediaId
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
exports.updateMedia = function(req, res){
    if (
        req.body.MessageId &&
            req.body.OwnerId
        ){

        var title = null;
        var type = null;
        var fileName= null;
        var mediaUrl = null;
        var status = null;
        var description = null;
        var fileType = null;
        var imgUrl = null;
        var imgUrl2 = null;
        var imgUrl3 = null;
        var imgUrl4 = null;
        var ownerId = null;
        var fileSize = null;

        if (req.body.Title) title = req.body.Title;
        if (req.body.FileName) fileName = req.body.FileName;
        if (req.body.MediaUrl) mediaUrl = req.body.MediaUrl;
        if (req.body.Status) status = req.body.Status;
        if (req.body.Description) description = req.body.Description;
        if (req.body.FileType) fileType = req.body.FileType;
        if (req.body.ImgUrl) imgUrl = req.body.ImgUrl;
        if (req.body.ImgUrl2) imgUrl2 = req.body.ImgUrl2;
        if (req.body.ImgUrl3) imgUrl3 = req.body.ImgUrl3;
        if (req.body.ImgUrl4) imgUrl4 = req.body.ImgUrl4;
        if (req.body.FileSize) fileSize = req.body.FileSize;

        dbconnectHelper.connectAndQuery(
            req
            , res
            , 'SELECT * FROM  update_media($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)'
            , [
                mediaId
                , title
                , type
                , fileName
                , mediaUrl
                , status
                , description
                , fileType
                , imgUrl
                , imgUrl2
                , imgUrl3
                , imgUrl4
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