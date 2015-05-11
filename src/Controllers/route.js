angular.module('GameFindr', [
	'ngRoute',
	'GameFindr.controllers',
	'GameFindr.search'
])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/', { templateUrl: 'home.html', controller: 'homeController' }).
		when('/results/:keyword', { templateUrl: 'results.html', controller: 'resultsController'}).
		when('/video/:videoId', { templateUrl: 'video.html', controller: 'vidController'}).
		otherwise({ redirectTo: '/' });
}]);