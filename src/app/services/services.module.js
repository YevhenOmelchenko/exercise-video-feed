import angular from 'angular';

import { GeneralDataService } from './general-data.service';

export const ServicesModule = angular.module('app.services', [])
	.service('GeneralDataService', GeneralDataService)
	.name;