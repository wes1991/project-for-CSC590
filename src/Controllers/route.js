angular.module('GameFindr', [
	'ngRoute',
	'GameFindr.controllers',
	'GameFindr.services'
])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/', { templateUrl: 'home.html', controller: 'homeController' }).
		when('/results/:keyword', { templateUrl: 'results.html', controller: 'resultsController'}).
		when('/video/:videoId', { templateUrl: 'video.html', controller: 'vidController'}).
		when('/favorites/', { templateUrl: 'favs.html', controller: 'favController'});
		//otherwise({ redirectTo: '/' });
}]);