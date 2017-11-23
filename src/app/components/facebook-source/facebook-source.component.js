import template from './facebook-source.html';
import controller from './facebook-source.controller';

export const FacebookSourceComponent = {
	restrict: 'E',
	bindings: {
		item: '<',
		width: '<'
	},
	template,
	controller
};