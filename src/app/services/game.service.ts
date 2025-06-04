import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

@Injectable()
export class GameService {

    stopPlay: boolean = false;
    flagsLeft: number = this.configService.mines;
    squaresLeft: number = (this.configService.height * this.configService.width) - this.configService.mines;
    minesToPlant: number = this.configService.mines;
    firstClick: boolean = true;
    mouseDown: boolean = false;

    timer: number = 0;
    timerInterval: any;

    constructor(
        private configService: ConfigService
    ) { }


    newGame(): void {
        this.firstClick = true;
        this.stopPlay = false;
        this.timer = 0;

        this.flagsLeft = this.configService.mines;
        this.squaresLeft = (this.configService.height * this.configService.width) - this.configService.mines;

        this.minesToPlant = this.configService.mines;
    }

    isVictorious(): boolean {
        if (this.squaresLeft !== 0)
            return false;

        this.stopTimer();
        return true;
    }

    startTimer() {
        this.stopTimer();
        this.timerInterval = setInterval(() => this.timer++, 1000)
    }

    stopTimer() {
        clearInterval(this.timerInterval);
    }
}
