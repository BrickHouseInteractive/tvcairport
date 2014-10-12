angular.module('tvcairport').controller('InfoCtrl', ['$scope','$rootScope','$routeParams','$timeout',
	function ($scope, $rootScope, $routeParams, $timeout){
		
		//------Vars-----//
    	$scope.infoPage = "";


    	//---Functions--//


    	//------Init-----//
    	console.log($routeParams);
    	$scope.infoPage = "views/info/" + $routeParams.page + ".html";
    	
    	
    	$timeout(function(){
    		console.log("test")
    		var phoneNumbers = $(".phone");
    		$.each(phoneNumbers, function(index,value){
				console.log(value);
				var origNumber = $(value).text();
				var strippedNumber = origNumber.replace(/\D/g,'');
				$(value).html("<a href='tel:"+strippedNumber+"'>"+origNumber+"</a>");
			})
    	},500)
		
	}
])