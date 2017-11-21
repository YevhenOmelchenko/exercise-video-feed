export default class YoutubeSourceController {
	constructor(YoutubeSourceService) {
		this.youtubeSourceService = YoutubeSourceService;
	}
	
	$onInit() {
		this.url = this.youtubeSourceService.makeVideoURL(this.item.videoId);
     	this.srcSCE = this.youtubeSourceService.getTrustedURL(this.url);
    }
}