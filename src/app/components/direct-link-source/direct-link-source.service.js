export class DirectLinkSourceService {
	constructor($sce) {
        this.sce = $sce;
	}
	getTrustedURL(url) {
		return this.sce.trustAsResourceUrl(url);
	}
}