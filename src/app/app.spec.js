import { AppModule } from './app';

describe('app', () => {

  describe('AppCtrl', () => {
    let ctrl;
    let element;

    beforeEach(() => {
      angular.mock.module(AppModule);

      angular.mock.inject(($compile, $rootScope) => {
        element = $compile('<app></app>')($rootScope)[0];
        $rootScope.$digest();
      });
    });

    it('should contain the starter url', () => {
      expect(element.querySelector('div').innerText).toBe('VIDEO FEED');
    });
  });
});