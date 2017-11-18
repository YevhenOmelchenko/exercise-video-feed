import template from './app.html';
import controller from './app.controller';

let appComponent = function() {
  return {
    template,
    scope: {},
    restrict: 'E',
    controller,
    controllerAs: 'ctrl'
  };
};

export default appComponent;