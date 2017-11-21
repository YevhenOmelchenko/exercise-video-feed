import angular from 'angular';
import { UrlSourceComponent } from './url-source.component';
import { UrlSourceService } from './url-source.service';
import './url-source.css';

export const UrlSourceModule = angular.module('urlSource', [])
	.component('urlSource', UrlSourceComponent)
	.service('UrlSourceService', UrlSourceService)
	.name;
