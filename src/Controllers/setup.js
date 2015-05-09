// Called automatically when JavaScript client library is loaded.
function onClientLoad() {
	console.log("cat");
	gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

// Called automatically when YouTube API interface is loaded.
function onYouTubeApiLoad() {
	console.log("dog");
	gapi.client.setApiKey('AIzaSyD29-zbh6xs_DfrSX9naGq0aX1lLvLb59o');
	
}