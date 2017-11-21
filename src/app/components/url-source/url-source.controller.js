export default class UrlSourceController {
	constructor(UrlSourceService) {
		this.urlSourceService = UrlSourceService;
	}
	
	$onInit() {
		this.srcSCE = this.urlSourceService.getTrustedURL(this.item.url);
	}
}