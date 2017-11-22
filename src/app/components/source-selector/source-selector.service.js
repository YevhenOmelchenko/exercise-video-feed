export class SourceSelectorService {
	constructor() {
		
	}

	markAlaviableSorce(items) {
		angular.forEach(items, item => {
			item.avaliableSource = this.checkVideoSource(item);
		});
	}

	checkVideoSource(item) {
		switch(item.source) {
			case 'url': {
				return item.url ? 'url' : false;
			}
			case 'youtube': {
				return item.videoId ? 'youtube' : false;
			}
			case 'facebook': {
				return item.videoId ? 'facebook' : false;
			}
			default: {
				return false;
			}
		}
	}
}