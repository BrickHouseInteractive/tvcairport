angular.module('tvcairport').controller('MainCtrl', ['$scope','$rootScope','$location','$timeout', '$http', 
	function ($scope, $rootScope, $location, $timeout, $http){
		
		//------Vars-----//
    	$scope.menuItem = "home";


    	//---Functions--//
    	$scope.setMenuItem = function(item){
    		$scope.menuItem = item;
    	}


    	//------Init-----//
    	$scope.$on('$routeChangeStart', function(next, current) { 
			$scope.showTitle = $location.path() != "/";
			if($scope.pageData){
				$scope.pageTitle = $scope.pageData[$location.path()].title;
				$scope.menuItem = $scope.pageData[$location.path()].menu;
			}
    	})

    	$http.get('data/page-titles.json').
		  success(function(data, status, headers, config) {
		    $scope.pageData = data;
		  })
	}
])