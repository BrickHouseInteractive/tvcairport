angular.module('tvcairport').controller('MainCtrl', ['$scope','$rootScope','$location','$timeout', '$http', 
	function ($scope, $rootScope, $location, $timeout, $http){
		
		//------Vars-----//
    	$scope.menuItem = "home";


    	//---Functions--//
    	$scope.setPageInfo = function(){
    		$scope.showTitle = $location.path() != "/" && $location.path() != "";
    		console.log("route: " + $location.path());
			if($scope.pageData){
				if($scope.showTitle) $scope.pageTitle = $scope.pageData[$location.path()].title;
				$scope.menuItem = $scope.pageData[$location.path()].menu;
			}
    	}

    	$scope.back = function(){
    		window.history.back();
    	}


    	//------Init-----//
    	$scope.$on('$routeChangeStart', function(next, current) { 
			$scope.setPageInfo()
    	})

    	$http.get('data/page-titles.json').
		  success(function(data, status, headers, config) {
		    $scope.pageData = data;
		    $scope.setPageInfo();
		  })
	}
])