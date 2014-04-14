dbconnectHelper = require('../../helpers/dbConnect');
exports.getEntityProductRegistrationDetail = function(req, res){
    var productRegistrationId = null;
    var type = null;
    var status = null;
    var productId = null;
    var entityId = null;
    var pageSize = null;
    var skipSize = null;

    if (req.query.ProductRegistrationId) productRegistrationId = req.query.ProductRegistrationId;
    if (req.query.Type) type = req.query.Type;
    if (req.query.Status) status = req.query.Status;
    if (req.query.ProductId) productId = req.query.ProductId;
    if (req.query.EntityId) entityId = req.query.EntityId;
    if (req.query.PageSize) pageSize = req.query.PageSize;
    if (req.query.SkipSize) skipSize = req.query.SkipSize;

    dbconnectHelper.connectAndQuery(
        req
        , res
        , 'SELECT * FROM  get_entity_product_registration_details($1, $2, $3, $4, $5, $6, $7)'
        , [
            productRegistrationId
            , type
            , status
            , productId
            , entityId
            , pageSize
            , skipSize
        ]);
};