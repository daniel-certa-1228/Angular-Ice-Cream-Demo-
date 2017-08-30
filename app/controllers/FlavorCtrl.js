"use strict";
console.log( "FlavorCtrl.js" );

//$scope ties the app to this HTML page
app.controller("FlavorCtrl", function($scope, FlavorFactory){

	FlavorFactory.getFlavors()
	.then(function(itemCollection){
		$scope.flavors = itemCollection;
		console.log( "flavors", $scope.flavors );
	});

});