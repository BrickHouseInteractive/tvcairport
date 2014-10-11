'use strict';
angular.module('configuration', []);

angular.module('tvcairport', ['ngRoute','ngAnimate','configuration'])
.config(function ($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'views/home.html'
	}).when('/flights', {
		templateUrl: 'views/flights-menu.html'
	})
})
.config(['$compileProvider', function($compileProvider) {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file):/);
}])

window.addEventListener('load', function(){
    FastClick.attach(document.body);
}, false);