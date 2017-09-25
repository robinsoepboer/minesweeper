import { Injectable } from '@angular/core';

@Injectable()
export class GameService {

    constructor() { }

    stopPlay = false;
    flagsLeft = 0//settings.mines;
    minesLeft = 0//settings.mines;
    minesToPlant = 0//settings.mines;
    firstClick = true;

    newGame(): void {
        this.firstClick = true;
        this.stopPlay = false;

        this.flagsLeft = 0//settings.mines;
        this.minesLeft = 0//settings.mines;
        this.minesToPlant = 0//settings.mines;

        //minefield.generateNewField();
        //$rootScope.$broadcast('fieldRegenerated');
    }

    isVictorious(): boolean {
        if (this.minesLeft !== 0)
            return false;

        return true;
    }
}
