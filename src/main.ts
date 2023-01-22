import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { RapidAppModule } from './app/rapid-app.module';

platformBrowserDynamic()
  .bootstrapModule(RapidAppModule)
  .catch((err) => console.error(err));
