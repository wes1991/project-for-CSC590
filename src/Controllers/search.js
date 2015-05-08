var textElement = document.getElementById('query');
var keyword;


// Helper function to display JavaScript value on HTML page.
function showResponse(response) {
    var responseString = JSON.stringify(response, '', 2);
    document.getElementById('response').innerHTML += responseString;
}

// Called automatically when JavaScript client library is loaded.
function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

// Called automatically when YouTube API interface is loaded.
function onYouTubeApiLoad() {
    gapi.client.setApiKey('AIzaSyD29-zbh6xs_DfrSX9naGq0aX1lLvLb59o');

    //console.log('done');
}

textElement.onkeydown=function(e){
	if(e.keyCode==13){
		alert('Looking for ' + textElement.value + ' on YouTube')
		keyword = textElement.value;
		//console.log(keyword);
		search();
	}
}	

function search() {
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

// Called automatically with the response of the YouTube API request.
function onSearchResponse(response) {
    showResponse(response);
	//delete this later
	console.log(response);
	console.log(response.items[0].snippet.title); //title
	console.log(response.items[0].id.videoId); //videoId needed for url
	console.log(response.items[0].snippet.thumbnails.medium.url); //thumbnail
}