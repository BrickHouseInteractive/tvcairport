angular.module('tvcairport').controller('InfoCtrl', ['$scope','$rootScope','$routeParams','$timeout',
	function ($scope, $rootScope, $routeParams, $timeout){
		
		//------Vars-----//
    	$scope.infoPage = "";


    	//---Functions--//


    	//------Init-----//
    	console.log($routeParams);
    	$scope.infoPage = "views/info/" + $routeParams.page + ".html";
    	
	}
])