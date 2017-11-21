import angular from 'angular';
import { SourceSelectorComponent } from './source-selector.component';
import { SourceSelectorService } from './source-selector.service';
import './source-selector.css';

export const SourceSelectorModule = angular.module('sourceSelector', [])
  .component('sourceSelector', SourceSelectorComponent)
  .service('SourceSelectorService', SourceSelectorService)
  .name;
