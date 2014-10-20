angular.module('tvcairport').controller('InfoCtrl', ['$scope','$rootScope','$routeParams','$timeout',
	function ($scope, $rootScope, $routeParams, $timeout){
		
		//------Vars-----//
    	$scope.infoPage = "";
        $scope.images = [
            "img/gallery/acme-reeds_2176.jpg",
            "img/gallery/beach-base-peninsula_2088.jpg",
            "img/gallery/beach-morning-old-mis-pen_1628.jpg",
            "img/gallery/beach-old-mis-pen_1684.jpg",
            "img/gallery/beach_2158.jpg",
            "img/gallery/bowers-harbor_2008.jpg",
            "img/gallery/church-old-mis-pen_1657.jpg",
            "img/gallery/dock-boats-old-mis_1621.jpg",
            "img/gallery/east-bay-water-sky_2232.jpg",
            "img/gallery/hillside-cram-rd_7098.jpg"
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