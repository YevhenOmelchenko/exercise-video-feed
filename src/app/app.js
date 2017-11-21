import angular from 'angular';
import { AppComponent } from './app.component';
import { ComponentsModule } from'./components/components.module';
import { ServicesModule } from'./services/services.module';
import './app.css';

const MODULE_NAME = 'pbVideoFeed';

export const AppModule = angular.module(MODULE_NAME, [ComponentsModule, ServicesModule])
  .component('app', AppComponent)
  .name;