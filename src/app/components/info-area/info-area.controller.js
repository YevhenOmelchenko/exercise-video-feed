export default class InfoAreaController {
	constructor(InfoAreaService) {
		this.infoAreaService = InfoAreaService;
	}

	$onInit() {
		this.title = this.infoAreaService.isDataAvaliable(this.title);
		this.views = this.views 
							? this.infoAreaService.formatViewsData(this.views) 
							: this.infoAreaService.isDataAvaliable(this.views);
	}
}