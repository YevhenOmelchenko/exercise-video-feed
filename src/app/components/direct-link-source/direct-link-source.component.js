import template from './direct-link-source.html';
import controller from './direct-link-source.controller';

export const DirectLinkSourceComponent = {
  restrict: 'E',
  bindings: {
  	width: '<',
  	height: '<',
  	src: '<'
  },
  template,
  controller
};