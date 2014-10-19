angular.module('tvcairport').controller('TripsCtrl', ['$scope','$rootScope','$routeParams','$timeout','$location','MyTrips',
    function ($scope, $rootScope, $routeParams, $timeout, $location, MyTrips){
        
        //------Vars-----//
        $scope.currentPage = $routeParams.page;
        $scope.type = $routeParams.type;
        $scope.tripPage = "views/my-trips/"+$routeParams.page+".html";
        $scope.trip = MyTrips.trip;
        $scope.showDelete = false;
        $scope.deleteTripObject = null;
        $scope.hour = [];
        $scope.minute = [];
        $scope.ampm = ["am","pm"];

        console.log($scope.trip)
        

        //---Functions--//
        var getTrips = function(){
             MyTrips.getTrips(function(trips){
                $scope.$apply(function(){
                     $scope.trips = trips;
                })  
            });
        }

        $scope.newTrip = function(){
            MyTrips.newTrip(function(){
               $location.path("/my-trips/trip-name");
            });
        }

        $scope.saveTrip = function(){
            $rootScope.savingTrip = true;
            MyTrips.saveTrip(function(){
                $timeout(function(){
                    $rootScope.savingTrip = false;
                },1000)
                console.log("Saved Trip!")
            })
        }

        $scope.editTrip = function(trip){
            console.log(trip)
            MyTrips.trip = trip.data;
            MyTrips.id = trip.id;
            $location.path("/my-trips/trip-name");
        }

        $scope.deleteTrip = function(id){
            MyTrips.deleteTrip(id, function(){
                getTrips();
            });
            $scope.showDelete = false;
        }

        $scope.addTripSection = function(section){
            var clone = angular.copy(MyTrips.trip[section][0]);
            angular.forEach(clone, function(value){
                value = "";
            })
            MyTrips.trip[section].push(clone);
        }

        $scope.removeTripSection = function(section, index){
            MyTrips.trip[section].splice(index, 1);
        } 

        $scope.toggleDelete = function(trip){
            $scope.showDelete = !$scope.showDelete;
            if($scope.showDelete == true){
                console.log(trip)
                $scope.deleteTripObject = trip;
            }
        } 

        $scope.viewTripSum = function(trip){
            MyTrips.trip = trip.data;
            $location.path("trip-sum");
        } 

        $scope.checkTripInfo = function(section){
            var showSection = false
            if(section instanceof Array){
                angular.forEach(section, function(subSec, key){
                    angular.forEach(subSec, function(item, key){
                        if(item != "" && key != '$$hashKey') showSection = true;
                    })
                })
            }else{
                angular.forEach(section,function(item){
                    if(item != "") showSection = true;
                })
            }
            return showSection;
        }    

        //------Init-----//
        getTrips();

        if(Object.keys(MyTrips.trip).length == 0){
            $location.path("/my-trips");
        }

        for(i=1;i<=12;i++){
            $scope.hour.push(i);
        }

        for(i=1;i<=60;i++){
            if(i < 10){
                $scope.minute.push("0"+i);
            }else{
                $scope.minute.push(i);
            }
            
        }
    }
])