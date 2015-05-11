angular.module('GameFindr.controllers', [])
.controller('homeController', ["$scope", "$location", "youtubeAPI", function($scope, $location, youtubeAPI) {
	// Activates search method when enter key is pressed
	if(document.getElementById('query')) {
		var textElement = document.getElementById('query');
		textElement.onkeyup=function(e){
			if(e.keyCode==13){
				$location.path('/results/' + textElement.value);
				$scope.$apply();
				//youtubeAPI.search(textElement.value);
			}
		}
	};
}])

.controller('resultsController', ["$scope", "$routeParams", "$location", "youtubeAPI", function($scope, $routeParams, $location, youtubeAPI) {
	window.onSearchResponse = function(response) {
		$scope.videos = response.items;
		$scope.$apply();
		console.log(response);
		console.log(response.items[0].snippet.thumbnails.medium.url); //thumbnail
		console.log(response.items[0].snippet.title); //title
		console.log(response.items[0].id.videoId); //videoId needed for url
	};
	
	youtubeAPI.search($routeParams.keyword);
	
	if(document.getElementById('query')) {
		var textElement = document.getElementById('query');
		console.log(textElement.value);
		textElement.onkeyup=function(e){
			if(e.keyCode==13){
				$location.path('/results/' + textElement.value);
				$scope.$apply();
				//youtubeAPI.search(textElement.value);
			}
		}
	};
}])

.controller('vidController', ["$scope", "$sce", "$routeParams", "favManager", function($scope, $sce, $routeParams, favManager) {
	$scope.routeParams = $routeParams;
	$scope.embedURL = "https://www.youtube.com/embed/" + $scope.routeParams.videoId + "?autoplay=1";
	$scope.trustedEmbedURL = $sce.trustAsResourceUrl($scope.embedURL);
	$scope.toggle = function(vidID) {	
		favManager.getGameFindrChest(vidID);
		favManager.toggle();
	};
	$scope.elementExists = favManager.elementExists;
}])

.controller('favController', ["$scope", "favManager", function($scope, favManager) {
	$scope.favorites = favManager.getAllFavorites();
	
}]);