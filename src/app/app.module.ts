import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//Components
import { GameComponent } from './game/game.component';
import { FieldComponent } from './field/field.component';

//Services
import { GameService } from './services/game.service';
import { ConfigService } from './services/config.service';
import { MinefieldService } from './services/minefield.service';
import { MineGeneratorService } from './services/mine-generator.service';
import { SquareComponent } from './square/square.component';
import { GameOptionsComponent } from './game-options/game-options.component';

@NgModule({
    declarations: [
        GameComponent,
        FieldComponent,
        SquareComponent,
        GameOptionsComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [
        GameService,
        ConfigService,
        MinefieldService,
        MineGeneratorService
    ],
    bootstrap: [GameComponent]
})
export class AppModule {

}