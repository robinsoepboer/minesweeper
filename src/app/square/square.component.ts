import { Component, OnInit, Input } from '@angular/core';
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

    @Input() rowIndex: number;
    @Input() squareIndex: number;

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
    determineClass(x, y): string {
        var square: Square = this.minefieldService.getSquare(x, y);
        //var square: Square = this.square;

        if (square.flagPlanted) {
            if (this.gameService.stopPlay && square.value !== -1) {
                return 'flag flag-wrong';
            }

            return 'flag';
        }

        if (this.gameService.stopPlay && square.value === -1 && !square.show) {
            return 'mine unexploded';
        }

        if (!square.show)
            return '';

        else if (square.value === -1) {
            return 'mine';
        }
        return 'open open-' + square.value.toString();
    }

    /*
    *   Rightclick event: plants a flag on a square
    */
    plantFlag(x, y): void {
        var square: Square = this.minefieldService.getSquare(x, y);
        //var square: Square = this.square;
        
        if (square.show)
            return;

        if (this.gameService.stopPlay)
            return;

        if (!square.flagPlanted) {
            square.flagPlanted = true;
            this.gameService.flagsLeft--;

            if (square.value === -1)
                this.gameService.minesLeft--;

        } else {
            square.flagPlanted = false;
            this.gameService.flagsLeft++;

            if (square.value === -1)
                this.gameService.minesLeft++;

        }
    }

    /*
    *   Determines whether or not the square's value will be displayed (mines and open field will not have their value displayed)
    */
    displayText(x, y): string {
        var square: Square = this.minefieldService.getSquare(x, y);
        //var square: Square = this.square;        
        
        return square.show && square.value > 0 && !square.flagPlanted ? square.value.toString() : '';
    }

    /*
    *   click event: Reveal a square
    */
    reveal(x: number, y: number): void {
        if (this.gameService.stopPlay) {
            return;
        }

        if(this.gameService.firstClick){
          this.mineGeneratorService.generate(x, y);
          this.gameService.firstClick = false;
        }

        var square = this.minefieldService.getSquare(x, y); 

        if(square.flagPlanted)
            return;

        switch(square.value){
            case 0:
                this.minefieldService.revealOpenField(x, y);
                break;
            case -1:
                square.show = true;
                this.gameService.stopPlay = true;
                break;
            default:
                square.show = true;
                break;
        }
    }
}