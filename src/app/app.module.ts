import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Components
import { GameComponent } from './game/game.component';
import { FieldComponent } from './field/field.component';

@NgModule({
    declarations: [
        GameComponent,
        FieldComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [GameComponent]
})
export class AppModule {

}