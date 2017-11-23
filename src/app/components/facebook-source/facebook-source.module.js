import angular from 'angular';
import { FacebookSourceComponent } from './facebook-source.component';
import { FacebookSourceService } from './facebook-source.service';
import './facebook-source.css';

export const FacebookSourceModule = angular.module('facebookSource', [])
	.component('facebookSource', FacebookSourceComponent)
	.service('FacebookSourceService', FacebookSourceService)
	.name;
