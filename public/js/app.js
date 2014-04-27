'use strict';

// Declare app level module which depends on filters, and services

angular.module('eyeorcasPortalApp', [
    'ngRoute'
   , 'eyeorcasPortalApp.validationServices'
   , 'eyeorcasPortalApp.landingController'
]).
config(function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
});
