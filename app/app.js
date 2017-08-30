"use strict";
//always use var for app
var app = angular.module("IceCreamApp", ['ngRoute']);
					//routeProvider will look at the URL and display the content in ng-view
app.config(function($routeProvider){

	$routeProvider.
	when('/', {
		templateUrl: 'partials/greetings.html'
	}).
	when('/showall', {
		templateUrl: 'partials/flavor-list.html',
		controller: "FlavorCtrl"
	}).
	otherwise('/');

});