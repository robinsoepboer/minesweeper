import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Square } from '../models/square';
import { MinefieldService } from '../services/minefield.service';
import { GameService } from '../services/game.service';
import { MineGeneratorService } from '../services/mine-generator.service'

@Component({
    selector: 'ms-square',
    templateUrl: './square.component.html',
    styleUrls: ['./square.component.less']
})
export class SquareComponent implements OnInit {

    @Input() square: Square;

    constructor(
        private minefieldService: MinefieldService,
        private gameService: GameService,
        private mineGeneratorService: MineGeneratorService
    ) { }

    ngOnInit() {
    }

    /*
    *   Function used in ng-class directive, determines which class a square should receive
    */
    determineClass(): string {
        if (this.square.flagPlanted) {
            if (this.gameService.stopPlay && this.square.value !== -1) {
                return 'flag flag-wrong';
            }

            return 'flag';
        }

        if (this.gameService.stopPlay && this.square.value === -1 && !this.square.show) {
            return 'mine unexploded';
        }

        if (!this.square.show)
            return '';

        else if (this.square.value === -1) {
            return 'mine';
        }
        return 'open open-' + this.square.value.toString();
    }

    /*
    *   Rightclick event: plants a flag on a square
    */
    plantFlag(): void {
        if (this.square.show)
            return;

        if (this.gameService.stopPlay)
            return;

        if (!this.square.flagPlanted) {
            this.square.flagPlanted = true;
            this.gameService.flagsLeft--;

            if (this.square.value === -1)
                this.gameService.minesLeft--;

        } else {
            this.square.flagPlanted = false;
            this.gameService.flagsLeft++;

            if (this.square.value === -1)
                this.gameService.minesLeft++;

        }
    }

    /*
    *   Determines whether or not the square's value will be displayed (mines and open field will not have their value displayed)
    */
    displayText(): string {        
        return this.square.show && this.square.value > 0 && !this.square.flagPlanted ? this.square.value.toString() : '';
    }

    /*
    *   click event: Reveal a square
    */
    reveal(): void {
        if (this.gameService.stopPlay) {
            return;
        }

        if(this.gameService.firstClick){
          this.mineGeneratorService.generate(this.square);
          this.gameService.firstClick = false;
        }

        if(this.square.flagPlanted)
            return;

        switch(this.square.value){
            case 0:
                this.minefieldService.revealOpenField(this.square.x, this.square.y);
                break;
            case -1:
                this.square.show = true;
                this.gameService.stopPlay = true;
                break;
            default:
                this.square.show = true;
                break;
        }
    }
}