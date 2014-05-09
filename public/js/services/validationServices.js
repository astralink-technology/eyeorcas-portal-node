'use strict';

angular.module('eyeorcasPortalApp.validationServices', []).
    factory('validationServices', function () {
    return {
        validateRequiredField: function (value, requiredMessage) {
            if (value){
                return false; //returns false
            }else{
                if (requiredMessage){
                    return requiredMessage;
                }else{
                    return "Required";
                }
            }
        },
        validateEmail: function (value, required, requiredMessage, invalidEmailMessage){
            //validate if its required first
            if (required){
                if (value){
                    //validate the email next
                    var checkEmailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    if (checkEmailRegex.test(value)){
                        return false;
                    }else{
                        if (invalidEmailMessage){
                            return false;
                        }else{
                            return "Invalid Email";
                        }
                    }
                }else{
                    if (requiredMessage){
                        return requiredMessage;
                    }else{
                        return "Required";
                    }
                }
            }
        }
    };

});