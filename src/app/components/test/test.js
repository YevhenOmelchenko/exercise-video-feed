import angular from 'angular';
import TestComponent from './test.component';

const TestModule = angular.module('test', [])
  .component('test', TestComponent);

export default TestModule;