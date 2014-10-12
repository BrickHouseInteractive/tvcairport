angular.module('tvcairport').controller('FrameCtrl', ['$scope','$rootScope','$location','$timeout', '$http', '$sce',
	function ($scope, $rootScope, $location, $timeout, $http, $sce){
		
		//------Vars-----//
    	$scope.frameUrl = ""


    	//---Functions--//


    	//------Init-----//
    	$scope.frameUrl = $scope.pageData[$location.path()].url;
	}
])