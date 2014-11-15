angular.module('tvcairport').controller('InfoCtrl', ['$scope','$rootScope','$routeParams','$timeout',
	function ($scope, $rootScope, $routeParams, $timeout){
		
		//------Vars-----//
    	$scope.infoPage = "";
        $scope.imageHeight = window.innerHeight - document.getElementById("title-container").offsetHeight-document.getElementById("menu").offsetHeight;
       
        $scope.images = [
            {
                "src":"boats-suttons-bay-harbor",
                "description":"Suttons Bay boat harbor"
            },
            {
                "src":"sleeping-bear-dunes",
                "description":"Sleeping Bear Dunes"
            },
            {
                "src":"gaylord-golf-course",
                "description":"Gaylord golf course"
            },
            {
                "src":"boat-bowers-harbor",
                "description":"Bowers Harbor"
            },
            {
                "src":"boats-anchored-omena",
                "description":"Boats in East Bay"
            },
            {
                "src":"good-bar-beach",
                "description":"View over North Bar Lake"
            },
            {
                "src":"boats-west-bay",
                "description":"Sailboats in West Bay"
            },
            {
                "src":"bowers-harbor-boats",
                "description":"Bowers Harbor"
            },
            {
                "src":"crystal-river",
                "description":"Crystal River"
            },
            {
                "src":"east-bay-grasses",
                "description":"East Bay from Acme"
            },
            {
                "src":"fall-boyne-valley",
                "description":"Hills near Boyne City"
            },
            {
                "src":"glen-arbor-beach",
                "description":"Leelanau Peninsula beach"
            },
            {
                "src":"glen-little-glen-lake",
                "description":"Little Glen Lake and Glen Lake"
            },
            {
                "src":"grand-traverse-lighthouse",
                "description":"Grand Traverse Lighthouse"
            },
            {
                "src":"hillside-williamsburg",
                "description":"Fall in Antrim County"
            },
            {
                "src":"kayaks-old-mission-pen",
                "description":"Kayaking on West Bay"
            },
            {
                "src":"old-miss-lighthouse",
                "description":"Mission Point Lighthouse"
            },
            {
                "src":"boats-dock-old-mission-pen",
                "description":"Boat dock on West Bay"
            },
            {
                "src":"old-mission-pen",
                "description":"Boats on Old Mission Peninsula"
            },
            {
                "src":"river-lake-leelanau",
                "description":"Lake Leelanau narrows"
            },
            {
                "src":"sand-lakes-trail",
                "description":"Sand Lakes Quiet Area trail"
            },
            {
                "src":"sleeping-bear-dunes-hill-climb",
                "description":"Sleeping Bear Dunes"
            },
            {
                "src":"suttons-bay-marina-sunrise",
                "description":"Suttons Bay"
            },
            {
                "src":"vineyard-old-mission-pen",
                "description":"Old Mission Peninsula vineyard"
            },
            {
                "src":"acme-forest",
                "description":"Forest in Williamsburg"
            }
        ]

    	//---Functions--//


    	//------Init-----//
    	$scope.infoPage = "views/info/" + $routeParams.page + ".html";
    	
    	
    	$timeout(function(){
    		var phoneNumbers = $(".phone");
    		$.each(phoneNumbers, function(index,value){
				var origNumber = $(value).text();
				var strippedNumber = origNumber.replace(/\D/g,'');
				$(value).html("<a href='tel:"+strippedNumber+"'>"+origNumber+"</a>");
			})
    	},500)
		
	}
])