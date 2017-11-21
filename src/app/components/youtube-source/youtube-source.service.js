export class YoutubeSourceService {
	constructor($sce) {
		this.sce = $sce;
		this.baseURL = 'https://www.youtube.com/embed/';
	}

	makeVideoURL(videoId) {
		return this.baseURL + videoId;
	}

	getTrustedURL(url) {
		return this.sce.trustAsResourceUrl(url);
	}
}