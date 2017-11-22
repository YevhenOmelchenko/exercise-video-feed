export default class SourceSelectorController {
	constructor(SourceSelectorService) {
		this.sourceSelectorService = SourceSelectorService;
	}

	$onInit() {
		this.sourceSelectorService.markAlaviableSorce(this.items);
	}
}