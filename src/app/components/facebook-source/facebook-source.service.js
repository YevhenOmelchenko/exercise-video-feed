export class FacebookSourceService {
	constructor($sce) {
		this.sce = $sce;
		this.baseURL = 'https://www.facebook.com/facebook/videos/';
	}

	injectSDK() {
		(function(d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) return;
			js = d.createElement(s); js.id = id;
			js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.11';
		 	fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
	} 

	makeVideoURL(videoId) {
		return this.baseURL + videoId;
	}

	getTrustedURL(url) {
		return this.sce.trustAsResourceUrl(url);
	}
}