angular.module('GameFindr.search', [])
.factory('youtubeAPI', [function() {
	
	var youtubeAPI = { };
	
	youtubeAPI.search = function(keyword) {
		// Use the JavaScript client library to create a search.list() API call.
		var request = gapi.client.youtube.search.list({
			part: 'snippet',
			q: keyword,
			type: 'video',
			maxResults: 20,
			videoCategoryId: '20',
		});
		
		// Send the request to the API server,
		// and invoke onSearchRepsonse() with the response.
		request.execute(onSearchResponse);
	}
	
	return youtubeAPI;
}]);