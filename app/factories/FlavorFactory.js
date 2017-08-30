"use strict";
console.log( "FlavorFactory.js" );

//$http = ajax calls within angular
//$q = angular promises		//always use function at the top level of a factory
app.factory("FlavorFactory", function($q, $http) {

	let getFlavors = () => {
		let items = [];
		return $q ((resolve, reject) => {
			$http.get('./data/flavors.json')
			.then((itemObject) => {
				let itemCollection = itemObject.data;
				resolve(itemCollection.flavors);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};

	let getOneFlavor = () => {
		console.log( "get one flavor" );
	};

	return{getFlavors, getOneFlavor};

});