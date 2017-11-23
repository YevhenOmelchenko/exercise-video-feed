import angular from 'angular';

import { InfoAreaModule } from './info-area.module';

describe('info-area component', () => {
	describe('info-area.service', () => {
		let element;
		let service;
		beforeEach(() => {
			angular.mock.module(InfoAreaModule);

			angular.mock.inject(($compile, $rootScope, $injector) => {
				element = $compile('<info-area></info-area>')($rootScope)[0];
				$rootScope.$digest();
				service = $injector.get('InfoAreaService');
			});
		});

		describe('isDataAvaliable', () => {

			it('should return passed data', () => {
				let result;
				let	data = 'some data';
				result = service.isDataAvaliable(data);
				expect(result).toBe('some data');
			});

			it('should return the string "data is unavailable"', () => {
				let result;
				let	data;
				result = service.isDataAvaliable(data);
				expect(result).toBe('data is unavailable');
			});

		});

		describe('formatViewsData', () => {

			it('should return result string as result divided to 1000000 and concat "M views"', () => {
				let result;
				let	viewsData = 1000000;
				result = service.formatViewsData(viewsData);
				expect(result).toBe('1.00M views');
			});

		});
	});
});