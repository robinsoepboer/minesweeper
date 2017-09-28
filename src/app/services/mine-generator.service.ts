import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { GameService } from './game.service';
import { MinefieldService } from './minefield.service';

@Injectable()
export class MineGeneratorService {

    constructor(
        private configService: ConfigService,
        private gameService: GameService,
        private minefieldService: MinefieldService
    ) { }

    /*
    * Generates all mines, the x and y parameters are the location of the first click which can never be a mine
    */
    generate(firstClickX: number, firstClickY: number): void {
        this.generateMines(firstClickX, firstClickY);
    }

    /*
    * Generates mines and places them in the minefield, surrounding squares are raised to indicate the presence of a mine
    */
    private generateMines(firstClickX: number, firstClickY: number): void {        
        while(this.gameService.minesToPlant !== 0){
            var y = this.randomNumber(this.configService.height); 
            var x = this.randomNumber(this.configService.width);

            if(this.minefieldService.getSquare(x, y).value === -1 || (x === firstClickX && y === firstClickY))
                continue;

            this.minefieldService.getSquare(x, y).value = -1;

            this.raiseSurroundingSquares(x, y);
            this.gameService.minesToPlant--;
        }
    }  

    /*
    *  Raise al surrounding squares to indicate the presence of a mine
    */
    raiseSurroundingSquares(x: number, y: number): void {
        this.raiseSquareByOne(x + 1, y);
        this.raiseSquareByOne(x - 1, y);

        this.raiseSquareByOne(x, y + 1);
        this.raiseSquareByOne(x + 1, y + 1);
        this.raiseSquareByOne(x - 1, y + 1);

        this.raiseSquareByOne(x, y - 1);
        this.raiseSquareByOne(x + 1, y - 1);
        this.raiseSquareByOne(x - 1, y - 1);
    }

    /*
    *  Raise a square to indicate the presence of a mine
    */
    raiseSquareByOne(x: number, y: number): void{
        if(x >= this.configService.width || x < 0)
            return;
        if(y >= this.configService.height || y < 0)
            return;

        if(this.minefieldService.getSquare(x, y).value === -1)
            return;

        this.minefieldService.getSquare(x, y).value++;
    }

    //Generate random number
    randomNumber(max: number): number {
        return Math.floor(Math.random() * max);
    }
}
