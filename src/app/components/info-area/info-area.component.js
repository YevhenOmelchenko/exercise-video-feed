import template from './info-area.html';
import controller from './info-area.controller';

export const InfoAreaComponent = {
  restrict: 'E',
  bindings: {
  	title: '<',
  	views: '<'
  },
  template,
  controller
};