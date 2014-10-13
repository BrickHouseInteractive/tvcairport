angular.module('tvcairport').controller('TripsCtrl', ['$scope','$rootScope','$routeParams','$timeout','$location','MyTrips',
    function ($scope, $rootScope, $routeParams, $timeout, $location, MyTrips){
        
        //------Vars-----//
        $scope.currentPage = $routeParams.page;
        $scope.type = $routeParams.type;
        $scope.tripPage = "views/my-trips/"+$routeParams.page+".html";
        $scope.trip = MyTrips.trip;
        

        //---Functions--//
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

        //------Init-----//
        MyTrips.getTrips(function(trips){
            $scope.$apply(function(){
                 $scope.trips = trips;
            })  
        });

        if(Object.keys(MyTrips.trip).length == 0){
            $location.path("/my-trips");
        }
    }
])