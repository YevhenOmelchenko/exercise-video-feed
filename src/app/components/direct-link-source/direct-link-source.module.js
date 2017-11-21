import angular from 'angular';
import { DirectLinkSourceComponent } from './direct-link-source.component';
import { DirectLinkSourceService } from './direct-link-source.service';
import './direct-link-source.css';

export const DirectLinkSourceModule = angular.module('directLinkSource', [])
  .component('directLinkSource', DirectLinkSourceComponent)
  .service('DirectLinkSourceService', DirectLinkSourceService)
  .name;
