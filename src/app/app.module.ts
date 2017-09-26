import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Components
import { GameComponent } from './game/game.component';
import { FieldComponent } from './field/field.component';

//Services
import { GameService } from './services/game.service';
import { ConfigService } from './services/config.service';

@NgModule({
    declarations: [
        GameComponent,
        FieldComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [
        GameService,
        ConfigService
    ],
    bootstrap: [GameComponent]
})
export class AppModule {

}