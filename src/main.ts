import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { setDefaultOptions } from 'date-fns';
import { es } from 'date-fns/locale';

setDefaultOptions({ locale: es });
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
