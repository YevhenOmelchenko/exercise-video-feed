import angular from 'angular';

import { SourceSelectorModule } from './source-selector/source-selector.module';
import { UrlSourceModule } from './url-source/url-source.module';
import { YoutubeSourceModule } from './youtube-source/youtube-source.module';
import { InfoAreaModule } from './info-area/info-area.module';

export const ComponentsModule = angular.module('app.components', [
	SourceSelectorModule,
	UrlSourceModule,
	YoutubeSourceModule,
	InfoAreaModule
])
.name;