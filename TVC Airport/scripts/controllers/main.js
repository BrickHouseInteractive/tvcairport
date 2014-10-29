angular.module('tvcairport').controller('MainCtrl', ['$scope','$rootScope','$location','$timeout', '$http', 'MyTrips',
	function ($scope, $rootScope, $location, $timeout, $http, MyTrips){
		
		//------Vars-----//
    	$scope.menuItem = "home";
    	$rootScope.savingTrip = false;

    	//---Functions--//
    	$scope.setPageInfo = function(){
    		$scope.showTitle = $location.path() != "/" && $location.path() != "";
    		console.log("route: " + $location.path());
			if($scope.showTitle && $scope.pageData){
				if($scope.showTitle) $scope.pageTitle = $scope.pageData[$location.path()].title;
				$scope.menuItem = $scope.pageData[$location.path()].menu;
			}
    	}

    	$scope.back = function(){
    		window.history.back();
    	}


    	//------Init-----//
    	MyTrips.initDB();
    	
    	$scope.$on('$routeChangeStart', function(next, current) { 
			$scope.setPageInfo()
    	})
        
        $scope.$on('$locationChangeStart', function(event, next, current) { 
            if(next.indexOf("frame/") != -1 && !navigator.onLine){
                //event.preventDefault();
                $location.path("/network-error")
            }
    	})

    	$http.get('data/page-titles.json').
		  success(function(data, status, headers, config) {
		    $scope.pageData = data;
		    $scope.setPageInfo();
		  })

		document.addEventListener("click", function(event){
			if(event.target.localName == "a" && event.target.target == "_blank"){
				window.open(event.target.href, '_system');
                event.preventDefault();
			}
		})
	}
])