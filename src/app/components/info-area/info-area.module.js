import angular from 'angular';
import { InfoAreaComponent } from './info-area.component';
import { InfoAreaService } from './info-area.service';
import './info-area.css';

export const InfoAreaModule = angular.module('infoArea', [])
  .component('infoArea', InfoAreaComponent)
  .service('InfoAreaService', InfoAreaService)
  .name;
