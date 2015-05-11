angular.module('GameFindr.services', [])
.factory('youtubeAPI', [function() {
	
	var youtubeAPI = { };
	
	youtubeAPI.search = function(keyword) {
		var request = gapi.client.youtube.search.list({
			part: 'snippet',
			q: keyword,
			type: 'video',
			maxResults: 20,
			videoCategoryId: '20',
		});
		
		request.execute(onSearchResponse);
	}
	
	return youtubeAPI;
}])

.factory('favManager', [function() {
	
	var favManager = { };
	
	favManager.getAllFavorites = function() {
		return JSON.parse(window.localStorage.getItem('GameFindrChest')).saved || [];
	}
	
	favManager.getGameFindrChest = function(vidID) {
		if (!window.localStorage.getItem('GameFindrChest')) {
			window.localStorage.setItem('GameFindrChest', JSON.stringify({ saved: [] }));
		}
		
		this.vidID = vidID;
		this.storage = JSON.parse(window.localStorage.getItem('GameFindrChest'));
		this.savedVids = this.storage.saved;
	};
	
	favManager.elementExistsAt = function() {
		for (var x = 0; x < this.savedVids.length; ++x) {
			if (this.savedVids[x].videoId == this.vidID) {
				return x;
			}
		}
		return -1;
	};
	
	favManager.elementExists = function(vidID) {
		if (!window.localStorage.getItem('GameFindrChest')) {
			window.localStorage.setItem('GameFindrChest', JSON.stringify({ saved: [] }));
		}
		
		var favorites = JSON.parse(window.localStorage.getItem('GameFindrChest')).saved;
		for (var x = 0; x < favorites.length; ++x) {
			if (favorites[x].videoId == vidID) {
				return true;
			}
		}
		return false;
	}
	
	favManager.addElement = function() {
		if (this.elementExistsAt() == -1) {
			this.savedVids.push({ videoId: this.vidID });
			this.storage.saved = this.savedVids;
			window.localStorage.setItem('GameFindrChest', JSON.stringify(this.storage));
		}
	}
	
	favManager.removeElement = function() {
		var index = this.elementExistsAt();
		if (index >= 0) {
			this.savedVids.splice(index, 1);
			this.storage.saved = this.savedVids;
			window.localStorage.setItem('GameFindrChest', JSON.stringify(this.storage));
		}
	}
	
	favManager.toggle = function() {	
		if (this.elementExistsAt() >= 0) {
			this.removeElement();
		} else {
			this.addElement();
		}
	};
	
	return favManager;
}]);