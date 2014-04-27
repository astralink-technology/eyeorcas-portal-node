var authHelper = require('../../helpers/authentication');
var dbConnectHelper = require('../../helpers/dbConnect');
var dateTimeHelper = require('../../helpers/dateTime');

exports.authenticate = function(req, res){
    if (
            req.body.AuthenticationString &&
            req.body.Password
        ){
        var authenticationString = null;
        var password = null;

        if (req.body.AuthenticationString) authenticationString= req.body.AuthenticationString;
        if (req.body.Password) password = req.body.Password;

        authHelper.authenticate(req, res, authenticationString, password, true, function(result, entityDetails){
            if (result){
                //if user is authenticated
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

    }else{
        res.json({
            RowsReturned : null,
            Data : false,
            Error : true,
            ErrorDesc : 'Username and Password Required',
            ErrorCode: null
        });
    }
};

exports.newAuthentication = function (req, res){
    if (
        req.body.UserString &&
        req.body.Password &&
        req.body.FirstName &&
        req.body.LastName
        ){

        var userstring = req.body.UserString;
        var password = req.body.Password;
        var firstname = req.body.FirstName;
        var lastname = req.body.LastName;

        authHelper.newAuthentication(req, res, userstring, password, firstname, lastname, function (result){
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

    }else{
        res.json({
            RowsReturned : null,
            Data : false,
            Error : true,
            ErrorDesc : 'Username, Password and User Details Required',
            ErrorCode: null
        });
    }
}

exports.destroyAuthentication = function (req, res){
    authHelper.destroyAuthentication(req, res);
    res.json({
        RowsReturned : null,
        Data : true,
        Error : false,
        ErrorDesc : null,
        ErrorCode: null
    });
}

exports.verifyAccount = function(req, res){
//    if (
//            req.query.AuthenticationId
//        ){

        var authenticationId = "X2WJOPNQ-8CF0HRWG-68L6T8LB";
        var lastUpdate = dateTimeHelper.utcNow();

        dbConnectHelper.connectAndQuery(req, res
            , 'UPDATE entity SET ' +
                'status = $1, ' +
                'approved = $2, ' +
                'last_update = $3 WHERE ' +
                'authentication_id =  $4'
            , [
                'V'
                , 't'
                , lastUpdate
                , authenticationId
            ],
        function(){
            //check if user is already logged in. If not, log them in after verification
            if (req.session.authenticationId){
                res.json({
                    RowsReturned : null,
                    Data : true,
                    Error : false,
                    ErrorDesc : null,
                    ErrorCode: null
                });
            }else{
                authHelper.authenticateExpress(req, res, null, authenticationId, function (result, entityDetails){
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
        });

//    }else{
//        res.json({
//            RowsReturned : null,
//            Data : false,
//            Error : true,
//            ErrorDesc : 'Unauthorized Access!',
//            ErrorCode: null
//        });
//    }
}