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
		//console.log(response.items[0].snippet.title); //title
		//console.log(response.items[0].id.videoId); //videoId needed for url
		//console.log(response.items[0].snippet.thumbnails.medium.url); //thumbnail
	};
	
	youtubeAPI.search($routeParams.keyword);	
	
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

.controller('vidController', ["$scope", "$sce", "$routeParams", function($scope, $sce, $routeParams) {
	$scope.routeParams = $routeParams;
	//console.log($scope.routeParams);
	//console.log($scope.routeParams.videoId);
	$scope.embedURL = "https://www.youtube.com/embed/" + $scope.routeParams.videoId + "?autoplay=1";
	$scope.trustedEmbedURL = $sce.trustAsResourceUrl($scope.embedURL);
	//console.log("Trusted URL:");
	//console.log($scope.trustedEmbedURL);
}]);
