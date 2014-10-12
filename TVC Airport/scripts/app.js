'use strict';
angular.module('configuration', []);

angular.module('tvcairport', ['ngRoute','ngAnimate','ngSanitize','configuration'])
.config(function ($routeProvider, $sceDelegateProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'views/home.html'
	}).when('/flights', {
		templateUrl: 'views/flights-menu.html'
	}).when('/info', {
		templateUrl: 'views/info-menu.html'
	}).when('/frame/:frame', {
		templateUrl: 'views/frame.html',
		controller: 'FrameCtrl'
	}).when('/info/:page', {
		templateUrl: 'views/info.html',
		controller: 'InfoCtrl'
	})

	$sceDelegateProvider.resourceUrlWhitelist([
	    'self',
	    'http://fvmobile.flightview.com/**'
	])
})
.config(['$compileProvider', function($compileProvider) {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file):/);  
}])

window.addEventListener('load', function(){
    FastClick.attach(document.body);
}, false);