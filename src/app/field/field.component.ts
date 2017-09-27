import { Component, OnInit } from '@angular/core';
import { MinefieldService } from '../services/minefield.service';
import { GameService } from '../services/game.service';
import { MineGeneratorService } from '../services/mine-generator.service';
import { Square } from '../models/square';

@Component({
    selector: 'ms-field',
    templateUrl: './field.component.html',
    styleUrls: ['./field.component.less']
})
export class FieldComponent implements OnInit {

    field: [Square[]];

    constructor(
        private minefieldService: MinefieldService,
        private gameService: GameService,
        private mineGeneratorService: MineGeneratorService
    ) { }

    ngOnInit() {
        this.field = this.minefieldService.field;
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