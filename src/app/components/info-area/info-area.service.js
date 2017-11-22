export class InfoAreaService {
	constructor() {

	}

	isDataAvaliable(data) {
		return data || 'data is unavailable';
	}

	formatViewsData(viewsData) {
		return (viewsData / 1000000).toFixed(2) + 'M views';
	}
}