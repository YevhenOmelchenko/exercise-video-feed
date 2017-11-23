export default class FacebookSourceController {
	constructor(FacebookSourceService) {
		this.facebookSourceService = FacebookSourceService;
	}

	$onInit() {
		this.url = this.facebookSourceService.makeVideoURL(this.item.videoId);
		this.srcSCE = this.facebookSourceService.getTrustedURL(this.url);
		this.facebookSourceService.injectSDK();
	}
}