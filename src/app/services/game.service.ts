import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { MinefieldService } from './minefield.service';

@Injectable()
export class GameService {

    stopPlay: boolean = false;
    flagsLeft: number = this.configService.mines;
    minesLeft: number = this.configService.mines;
    minesToPlant: number = this.configService.mines;
    firstClick: boolean = true;
    
    timer: number = 0;
    timerInterval: any;

    constructor(
        private configService: ConfigService,
        private minefieldService: MinefieldService
    ) { }

    
    newGame(): void {
        this.firstClick = true;
        this.stopPlay = false;
        this.timer = 0;

        this.flagsLeft = this.configService.mines;
        this.minesLeft = this.configService.mines;
        this.minesToPlant = this.configService.mines;

        this.minefieldService.generateNewField();
    }

    isVictorious(): boolean {
        if (this.minesLeft !== 0)
            return false;

        this.stopTimer();
        return true;
    }

    startTimer(){
        this.timerInterval = setInterval(() => this.timer++, 1000)
    }

    stopTimer(){
        clearInterval(this.timerInterval);
    }
}
