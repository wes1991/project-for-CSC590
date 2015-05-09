angular.module('GameFindr.controllers', [])
.controller('vidController', ["youtubeAPI", function(youtubeAPI) {
	var textElement = document.getElementById('query');
	// Activates search method when enter key is pressed
	textElement.onkeydown=function(e){
		if(e.keyCode==13){
			console.log('Looking for ' + textElement.value + ' on YouTube');
			youtubeAPI.search(textElement.value);
		}
	}	
}]);
