var dbconnectHelper = require('../../helpers/dbConnect');
var idgenHelper = require('../../helpers/idGen');
var dateTimeHelper = require('../../helpers/dateTime');
exports.getDeviceRelationshipMedia = function(req, res){
    var mediaId = null;
    var type = null;
    var status = null;
    var ownerId = null;
    var deviceId = null;
    var deviceRelationshipId = null;
    var pageSize = null;
    var skipSize = null;

    if (req.query.MediaId) mediaId = req.query.MediaId;
    if (req.query.Type) type = req.query.Type;
    if (req.query.Status) status = req.query.Status;
    if (req.query.OwnerId) ownerId = req.query.OwnerId;
    if (req.query.DeviceId) deviceId = req.query.DeviceId;
    if (req.query.DeviceRelationshipId) deviceRelationshipId = req.query.DeviceRelationshipId;
    if (req.query.PageSize) pageSize = req.query.PageSize;
    if (req.query.SkipSize) skipSize= req.query.SkipSize;

    dbconnectHelper.connectAndQuery(
        req
        , res
        , 'SELECT * FROM  get_device_relationship_media($1, $2, $3, $4, $5, $6, $7, $8)'
        , [
            mediaId
            , type
            , status
            , ownerId
            , deviceId
            , deviceRelationshipId
            , pageSize
            , skipSize
        ]);

};