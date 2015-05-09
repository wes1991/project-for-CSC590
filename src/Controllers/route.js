angular.module('GameFindr', [
	'ngRoute',
	'GameFindr.controllers',
	'GameFindr.search'
])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/', { templateUrl: 'home.html', controller: 'vidController' }).
		when('/results', { templateUrl: 'results.html'})
}]);