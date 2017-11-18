import angular from 'angular';
import GeneralVideoComponent from './generalVideo.component';

const GeneralVideoModule = angular.module('generalVideo', [])
  .component('generalVideo', GeneralVideoComponent);

export default GeneralVideoModule;