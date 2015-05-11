// Called automatically when JavaScript client library is loaded.
function onClientLoad() {
	gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

// Called automatically when YouTube API interface is loaded.
function onYouTubeApiLoad() {
	gapi.client.setApiKey('AIzaSyD29-zbh6xs_DfrSX9naGq0aX1lLvLb59o');
	console.log("boss");
}