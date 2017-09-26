import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { MinefieldService } from './minefield.service';

@Injectable()
export class GameService {

    stopPlay = false;
    flagsLeft = this.configService.mines;
    minesLeft = this.configService.mines;
    minesToPlant = this.configService.mines;
    firstClick = true;

    constructor(
        private configService: ConfigService,
        private minefieldService: MinefieldService
    ) { }

    
    newGame(): void {
        this.firstClick = true;
        this.stopPlay = false;

        this.flagsLeft = this.configService.mines;
        this.minesLeft = this.configService.mines;
        this.minesToPlant = this.configService.mines;

        this.minefieldService.generateNewField();
        //$rootScope.$broadcast('fieldRegenerated');
    }

    isVictorious(): boolean {
        if (this.minesLeft !== 0)
            return false;

        return true;
    }
}
