import angular from 'angular';

import './app.scss';

// main app component
import AppComponent from './app.component';

import './components/';

const MODULE_NAME = 'pbVideoFeed';

angular.module(MODULE_NAME, [])
  .directive('app', AppComponent);

export default MODULE_NAME;