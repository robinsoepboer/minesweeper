import { Injectable } from '@angular/core';
import { Square } from '../models/square';
import { ConfigService } from './config.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { GameService } from './game.service';

@Injectable()
export class MinefieldService {

    field: BehaviorSubject<[Square[]]>;
    field$: Observable<[Square[]]>;

    constructor(private configService: ConfigService, private gameService: GameService) {
        this.init();
    }

    init(){
        this.field = new BehaviorSubject(this.generateField());
        this.field$ = this.field.asObservable();
    }

    /*
    *   Gets a square at a certain position
    */
    getSquare(x: number, y: number): Square {
        if(this.field.getValue()[y] && this.field.getValue()[y][x] !== undefined)
            return this.field.getValue()[y][x];
        return null;
    }

    generateNewField(): void {
        this.field.next(this.generateField());
    }

    /*
    * function handles revealing an open field will recursively reveal all open surrounding fields
    */
    revealOpenField(x: number, y: number): void {
        let square = this.getSquare(x, y);

        if(!square || square.show)
            return;

        square.show = true;
        this.gameService.squaresLeft--;

        if(square.value !== 0)
            return;

        this.revealOpenField(x + 1, y);
        this.revealOpenField(x - 1, y);

        this.revealOpenField(x, y + 1);
        this.revealOpenField(x + 1, y + 1);
        this.revealOpenField(x - 1, y + 1);

        this.revealOpenField(x, y - 1);
        this.revealOpenField(x + 1, y - 1);
        this.revealOpenField(x - 1, y - 1);
    }

    /*
    *  Generates initial state of minefield without mines
    */
    generateField(): [Square[]] {
        let field: [Square[]] = [[]];

        for (let y = 0; y < this.configService.height; y++) {
            field[y] = [];

            for (let x = 0; x < this.configService.width; x++) {
                let square = new Square();
                square.value = 0;
                square.show = false;
                square.flagPlanted = false;
                square.x = x;
                square.y = y;

                field[y][x] = square;
            }
        }

        return field;
    }
}
