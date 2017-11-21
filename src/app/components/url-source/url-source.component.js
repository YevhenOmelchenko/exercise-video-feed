import template from './url-source.html';
import controller from './url-source.controller';

export const UrlSourceComponent = {
  restrict: 'E',
  bindings: {
  	item: '<'
  },
  template,
  controller
};