import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Components
import { MsGameComponent } from './ms-game/ms-game.component';

@NgModule({
    declarations: [
        MsGameComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [MsGameComponent]
})
export class AppModule {

}