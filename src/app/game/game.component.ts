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
    
    isVictorious (): boolean {
        return this.gameService.isVictorious();
    }

    minesLeft(): number {
        return this.gameService.minesLeft;
    }
}