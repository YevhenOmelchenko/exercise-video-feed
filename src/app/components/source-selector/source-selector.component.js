import template from './source-selector.html';
import controller from './source-selector.controller';

export const SourceSelectorComponent = {
  restrict: 'E',
  bindings: {
  	items: '<'
  },
  template,
  controller
};