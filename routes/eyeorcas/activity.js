dbconnectHelper = require('../../helpers/dbConnect');
idgenHelper = require('../../helpers/idGen');
dateTimeHelper = require('../../helpers/dateTime');
exports.getActivities = function(req, res){

    var ownerId = null;
    var deviceId = null;
    var logId = null;
    var messageId = null;
    var deviceRelationshipId = null;
    var logTitle = null;
    var logType = null;
    var logStatus = null;
    var messageType = null;
    var messageTriggerEvent = null;
    var pageSize = null;
    var skipSize = null;

    if (req.query.OwnerId) ownerId = req.query.OwnerId;
    if (req.query.DeviceId) deviceId = req.query.DeviceId;
    if (req.query.LogId) logId = req.query.LogId;
    if (req.query.MessageId) messageId = req.query.MessageId;
    if (req.query.DeviceRelationshipId) deviceRelationshipId = req.query.DeviceRelationshipId;
    if (req.query.LogTitle) logTitle = req.query.LogTitle;
    if (req.query.LogType) logType = req.query.LogType;
    if (req.query.LogStatus) logStatus = req.query.LogStatus;
    if (req.query.MessageType) messageType = req.query.MessageType;
    if (req.query.MessageTriggerEvent) messageTriggerEvent = req.query.MessageTriggerEvent;
    if (req.query.PageSize) pageSize = req.query.PageSize;
    if (req.query.SkipSize) skipSize= req.query.SkipSize;

    dbconnectHelper.connectAndQuery(
        req
        , res
        , 'SELECT * FROM  get_activity($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)'
        , [
            ownerId
            , deviceId
            , logId
            , messageId
            , deviceRelationshipId
            , logTitle
            , logType
            , logStatus
            , messageType
            , messageTriggerEvent
            , pageSize
            , skipSize
        ]);
};