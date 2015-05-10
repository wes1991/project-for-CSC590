angular.module('GameFindr.controllers', [])
.controller('searchController', ["$scope", "$location", "youtubeAPI", function($scope, $location, youtubeAPI) {
	// Activates search method when enter key is pressed
	//$scope.videos = [];
	if(document.getElementById('query')) {
		var textElement = document.getElementById('query');
		textElement.onkeyup=function(e){
			if(e.keyCode==13){
				console.log('Looking for ' + textElement.value + ' on YouTube');
				youtubeAPI.search(textElement.value);	
			}
		}
	};
	// Called automatically with the response of the YouTube API request.
	window.onSearchResponse = function(response) {
		console.log(response);
		//console.log(response.items[0].snippet.title); //title
		//console.log(response.items[0].id.videoId); //videoId needed for url
		//console.log(response.items[0].snippet.thumbnails.medium.url); //thumbnail
		$scope.videos = response.items;
		$scope.$apply();
		//$location.path('/results').replace();
		//$scope.$apply();
		
	};
	console.log($scope.videos);
}])

.controller('vidController', ["$scope", "$sce", "$routeParams", function($scope, $sce, $routeParams) {
	$scope.routeParams = $routeParams;
	console.log($scope.routeParams);
	console.log($scope.routeParams.videoId);
	$scope.embedURL = "https://www.youtube.com/embed/" + $scope.routeParams.videoId;
	//$scope.trustedEmbedURL = $sce.trustAsResourceUrl("https://www.youtube.com/embed/Y3Y1lbG0HkI");
	//console.log("Trusted URL:");
	//console.log($scope.trustedEmbedURL);
}]);
