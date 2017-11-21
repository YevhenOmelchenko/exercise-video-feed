export class UrlSourceService {
	constructor($sce) {
        this.sce = $sce;
	}
	getTrustedURL(url) {
		return this.sce.trustAsResourceUrl(url);
	}
}