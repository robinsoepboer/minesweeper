import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { GameComponent } from './app/game/game.component';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(GameComponent, {
  providers: [
    importProvidersFrom(AppModule)
  ]
}).catch(err => console.error(err));
