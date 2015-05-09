angular.module('GameFindr.search', [])
.factory('youtubeAPI', [function() {
	
	var youtubeAPI = { };
	
	youtubeAPI.search = function(keyword) {
		// Use the JavaScript client library to create a search.list() API call.
		var request = gapi.client.youtube.search.list({
			part: 'snippet',
			q: keyword,
			type: 'video',
		});
		
		// Send the request to the API server,
		// and invoke onSearchRepsonse() with the response.
		request.execute(onSearchResponse);
	}

	return youtubeAPI;
}]);



// Called automatically with the response of the YouTube API request.
window.onSearchResponse = function(response) {
    //showResponse(response);
	//delete this later
	console.log(response);
	console.log(response.items[0].snippet.title); //title
	console.log(response.items[0].id.videoId); //videoId needed for url
	console.log(response.items[0].snippet.thumbnails.medium.url); //thumbnail
}