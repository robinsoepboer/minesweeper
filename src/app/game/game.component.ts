import { Component } from '@angular/core';
import { GameService } from '../services/game.service'; 

@Component({
    selector: 'ms-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.less']
})
export class GameComponent {

    constructor(private gameService: GameService){}

    newGame(): void {
        this.gameService.newGame();
    }
    
    isVictorious(): boolean {
        return this.gameService.isVictorious();
    }

    minesLeft(): string {
        // the counter will show the amount of flagsleft instead of the amount of mines, 
        // because if the user places a wrong flag, it should decrement
        return (this.gameService.flagsLeft < 0 ? '-' : '0') + // first digit 
            (this.gameService.flagsLeft < 10 && this.gameService.flagsLeft > -10 ? '0' : '') + // second digit 
            (this.gameService.flagsLeft < 0 ? (this.gameService.flagsLeft * -1) : this.gameService.flagsLeft); // third digit
    }

    timer(): string {
        return (this.gameService.timer < 100 ? '0' : '') + (this.gameService.timer < 10 ? '0' : '') + this.gameService.timer;
    }

    buttonState(): string {
        if(this.isVictorious()){
            return 'cool';
        }
        else if(this.gameService.stopPlay) {
            return 'dead';
        }
        else if (this.gameService.mouseDown) {
            return 'oh';
        }

        return 'smile';
    }
}