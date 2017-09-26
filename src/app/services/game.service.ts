import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

@Injectable()
export class GameService {

    constructor(private configService: ConfigService) { }

    stopPlay = false;
    flagsLeft = this.configService.mines;
    minesLeft = this.configService.mines;
    minesToPlant = this.configService.mines;
    firstClick = true;

    newGame(): void {
        this.firstClick = true;
        this.stopPlay = false;

        this.flagsLeft = this.configService.mines;
        this.minesLeft = this.configService.mines;
        this.minesToPlant = this.configService.mines;

        //minefield.generateNewField();
        //$rootScope.$broadcast('fieldRegenerated');
    }

    isVictorious(): boolean {
        if (this.minesLeft !== 0)
            return false;

        return true;
    }
}
