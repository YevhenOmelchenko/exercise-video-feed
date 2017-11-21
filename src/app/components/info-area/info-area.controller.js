export default class InfoAreaController {
	constructor(InfoAreaService) {
		this.infoAreaService = InfoAreaService;
	}

	$onInit() {
		this.title = this.isDataAvaliable(this.title);
		this.views = this.views ? this.formatViewsData(this.views) : this.isDataAvaliable(this.views);
	}

	isDataAvaliable(data) {
		return data || 'data is unavailable';
	}

	formatViewsData(viewsData) {
		return (viewsData / 1000000).toFixed(2) + 'M views';
	}
}