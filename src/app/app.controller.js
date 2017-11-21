export default class AppController {
	constructor(GeneralDataService) {
		this.generalDataService = GeneralDataService;
	}

	$onInit() {
		this.data = this.generalDataService.getItems();
    }
}