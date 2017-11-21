import angular from 'angular';
import { YoutubeSourceComponent } from './youtube-source.component';
import { YoutubeSourceService } from './youtube-source.service';
import './youtube-source.css';

export const YoutubeSourceModule = angular.module('youtubeSource', [])
  .component('youtubeSource', YoutubeSourceComponent)
  .service('YoutubeSourceService', YoutubeSourceService)
  .name;
