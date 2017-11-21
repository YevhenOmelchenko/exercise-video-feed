import template from './youtube-source.html';
import controller from './youtube-source.controller';

export const YoutubeSourceComponent = {
  restrict: 'E',
  bindings: {
  	item: '<',
  	width: '<',
  	height: '<'
  },
  template,
  controller
};