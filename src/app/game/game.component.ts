import { Component } from '@angular/core';

@Component({
    selector: 'ms-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.less']
})
export class GameComponent {
    
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