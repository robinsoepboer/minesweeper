import { Injectable } from '@angular/core';
import { Square } from '../models/square';
import { ConfigService } from './config.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs';

@Injectable()
export class MinefieldService {

    field: BehaviorSubject<[Square[]]>;
    field$: Observable<[Square[]]>;

    constructor(private configService: ConfigService) { 
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
        if(this.field.getValue()[y])
            return this.field.getValue()[y][x];
    }
  
    generateNewField(): void {
        this.field.next(this.generateField());
    }
  
    /*
    * function handles revealing an open field, will recursivly reveal all open surrounding fields
    */
    revealOpenField(x: number, y: number): void {
        var square = this.getSquare(x, y);
  
        if(!square || square.show)
            return;

        square.show = true;
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
    *  Generates intial state of minefield without mines
    */
    generateField(): [Square[]] {
        var field: [Square[]] = [[]];

        for (var y = 0; y < this.configService.height; y++) {
            field[y] = [];

            for (var x = 0; x < this.configService.width; x++) {
                var square = new Square();
                square.value = 0;
                square.show = false;
                square.flagPlanted = false;

                field[y][x] = square;
            }
        }

        return field;
    }
}