import angular from 'angular';
import { AppComponent } from './app.component';
import { ComponentsModule } from'./components/components.module';
import './app.scss';

const MODULE_NAME = 'pbVideoFeed';

export const AppModule = angular.module(MODULE_NAME, [ComponentsModule])
  .component('app', AppComponent)
  .name;