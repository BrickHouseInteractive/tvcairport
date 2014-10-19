angular.module('tvcairport').directive('flightItem', ['MyTrips', function (MyTrips){
    return{
        replace: true,
        transclude: true,
        template: "<div class='flight-section' ng-show='{{item != \"\" && item != \": \"}}'><p><b ng-transclude></b> {{item}}</p></div>",
        scope:{
            item: '@flightItem'
        }
    }
}])
        