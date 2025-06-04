import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {provideAnimations} from '@angular/platform-browser/animations';

//Components
import {GameComponent} from './game/game.component';
import {FieldComponent} from './field/field.component';
import {SquareComponent} from './square/square.component';
import {GameOptionsComponent} from './game-options/game-options.component';

//Services
import {GameService} from './services/game.service';
import {ConfigService} from './services/config.service';
import {MinefieldService} from './services/minefield.service';
import {MineGeneratorService} from './services/mine-generator.service';

@NgModule({
    declarations: [
    ],
    imports: [
        BrowserModule,
        FormsModule,
        CommonModule
    ],
    providers: [
        GameService,
        ConfigService,
        MinefieldService,
        MineGeneratorService,
        provideAnimations()
    ],
    bootstrap: []
})
export class AppModule {

}
