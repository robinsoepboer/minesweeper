import { Component } from '@angular/core';

@Component({
    selector: 'ms-game',
    templateUrl: './ms-game.component.html'
})
export class MsGameComponent {
    
    newGame(): void {
        //game.newGame
    }
    
    isVictorious (): boolean {
        return false;
    }

    minesLeft(): number {
        return 10;
        //game.flagsLeft;
    }
}