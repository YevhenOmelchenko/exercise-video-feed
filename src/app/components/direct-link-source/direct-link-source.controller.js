export default class DirectLinkSourceController {
	constructor(DirectLinkSourceService) {
		this.directLinkSourceService = DirectLinkSourceService;
	}
	$onInit() {
      this.srcSCE = this.directLinkSourceService.getTrustedURL(this.src);
    }
}