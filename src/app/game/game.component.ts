import { Component } from '@angular/core';
import { GameService } from '../services/game.service';
import { MinefieldService } from '../services/minefield.service';
import { NgClass } from '@angular/common';

@Component({
    selector: 'ms-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.less']
})
export class GameComponent {

    constructor(
        private gameService: GameService,
        private minefieldService: MinefieldService,
    ) { }

    newGame(): void {
        this.minefieldService.generateNewField();
        this.gameService.newGame();
    }

    isVictorious(): boolean {
        return this.gameService.isVictorious();
    }

    minesLeft(): string {
        if (this.gameService.isVictorious()){
            return '000';
        }

        let minesLeftString = '';
        minesLeftString += (this.gameService.flagsLeft < 0 ? '-' : '0');
        minesLeftString += (this.gameService.flagsLeft < 10 && this.gameService.flagsLeft > -10 ? '0' : '');
        minesLeftString += (this.gameService.flagsLeft < 0 ? (this.gameService.flagsLeft * -1) : this.gameService.flagsLeft);

        // the counter will show the amount of flagsleft instead of the amount of mines,
        // because if the user places a wrong flag, it should decrement
        return  minesLeftString;
    }

    timer(): string {
        return (this.gameService.timer < 100 ? '0' : '') + (this.gameService.timer < 10 ? '0' : '') + this.gameService.timer;
    }

    buttonState(): string {
        if (this.isVictorious()) {
            return 'cool';
        }
        else if (this.gameService.stopPlay) {
            return 'dead';
        }
        else if (this.gameService.mouseDown) {
            return 'oh';
        }

        return 'smile';
    }
}
