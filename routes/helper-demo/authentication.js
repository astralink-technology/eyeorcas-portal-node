var authHelper = require('../../helpers/authentication');
var dbConnectHelper = require('../../helpers/dbConnect');

exports.auth = function(req, res){
    authHelper.authenticate(req, res, 'shiweifong@gmail.com', 's8944896d', true, function(result, entityDetails){
        if (result){
            res.json({
                RowsReturned : entityDetails.rows.length,
                Data : entityDetails.rows,
                Error : false,
                ErrorDesc : null,
                ErrorCode: null
            })
        }else{
            res.json({
                RowsReturned : null,
                Data : false,
                Error : true,
                ErrorDesc : 'Authentication Failed',
                ErrorCode: null
            });
        }
    });
}

exports.logOut = function (req, res){
    authHelper.destroyAuthentication(req,res);
    res.json('session destroyed');
}

exports.authenticateExpress = function (req, res){
    authHelper.authenticateExpress(req, res, 'shiweifong@gmail.com', function (result, entityDetails){
        if (result){
            res.json({
                RowsReturned : entityDetails.rows.length,
                Data : entityDetails.rows,
                Error : false,
                ErrorDesc : null,
                ErrorCode: null
            })
        }else{
            res.json({
                RowsReturned : null,
                Data : false,
                Error : true,
                ErrorDesc : 'Authentication Failed',
                ErrorCode: null
            });
        }
    });
}

exports.signUp = function (req, res){
    authHelper.newAuthentication(req, res, "nodeUser2@gmail.com", "nodenodeode", "Node", "User", function(result){
        if (!result.Error){
            res.json({
                RowsReturned : result.rows.length,
                Data : result.rows,
                Error : null,
                ErrorDesc : null,
                ErrorCode: null
            })
        }else{
            res.json({
                RowsReturned : null,
                Data : null,
                Error : result.Error,
                ErrorDesc :  result.ErrorDesc,
                ErrorCode:  result.ErrorCode
            })
        }
    });
}