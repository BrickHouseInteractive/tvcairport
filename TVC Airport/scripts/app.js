'use strict';
angular.module('configuration', []);

angular.module('tvcairport', ['ngRoute','ngAnimate','ngSanitize','configuration'])
.config(function ($routeProvider, $sceDelegateProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'views/home.html'
	}).when('/info', {
		templateUrl: 'views/info-menu.html'
	}).when('/info/:page', {
		templateUrl: 'views/info.html',
		controller: 'InfoCtrl'
	}).when('/flights', {
		templateUrl: 'views/flights-menu.html'
	}).when('/frame/:frame', {
		templateUrl: 'views/frame.html',
		controller: 'FrameCtrl'
	}).when('/my-trips', {
		templateUrl: 'views/my-trips-menu.html',
		controller: 'TripsCtrl'
	}).when('/my-trips/:page', {
		templateUrl: 'views/my-trips.html',
		controller: 'TripsCtrl'
	}).when('/trip-sum', {
		templateUrl: 'views/trip-sum.html',
		controller: 'TripsCtrl'
	}).otherwise({
		redirectTo: '/'
	})

	$sceDelegateProvider.resourceUrlWhitelist([
	    'self',
	    'http://fvmobile.flightview.com/**',
	    'https://www.google.com/maps/**'
	])
})
.config(['$compileProvider', function($compileProvider) {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file):/);  
}])

window.addEventListener('load', function(){
    FastClick.attach(document.body);
}, false);