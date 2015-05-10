angular.module('GameFindr', [
	'ngRoute',
	'GameFindr.controllers',
	'GameFindr.search'
])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/', { templateUrl: 'home.html', controller: 'searchController' }).
		//when('/results', { templateUrl: 'results.html', controller: 'vidController'}).
		when('/video/:videoId', { templateUrl: 'video.html', controller: 'vidController'}).
		otherwise({ redirectTo: '/' });
}]);