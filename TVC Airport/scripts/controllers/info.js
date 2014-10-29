angular.module('tvcairport').controller('InfoCtrl', ['$scope','$rootScope','$routeParams','$timeout',
	function ($scope, $rootScope, $routeParams, $timeout){
		
		//------Vars-----//
    	$scope.infoPage = "";
        $scope.imageHeight = window.innerHeight - document.getElementById("title-container").offsetHeight;
        $scope.images = [
            "boats-suttons-bay-harbor",
            "sleeping -bear-dunes",
            "gaylord-golf-course",
            "boat-bowers-harbor",
            "boats-anchored-omena",
            "good-bar-beach",
            "boats-west-bay",
            "bowers-harbor-boats",
            "crystal-river",
            "east-bay-grasses",
            "fall-boyne-valley",
            "glen-arbor-beach",
            "glen-little-glen-lake",
            "grand-traverse-lighthouse",
            "hillside-williamsburg",
            "kayaks-old-mission-pen",
            "old-miss-lighthouse",
            "boats-dock-old-mission-pen",
            "old-mission-pen",
            "river-lake-leelanau",
            "sand-lakes-trail",
            "sleeping-bear-dunes-hill-climb",
            "suttons-bay-marina-sunrise",
            "vineyard-old-mission-pen",
            "acme-forest"
        ]

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