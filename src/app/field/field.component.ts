import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ms-field',
    templateUrl: './field.component.html',
    styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

    field = { rows: [] }; //minefield.field

    constructor() { }

    ngOnInit() {
        // $scope.$on('fieldRegenerated', function(event,data) {
        //     $scope.field = minefield.field;
        // });
    }

    /*
    *   click event: Reveal a square
    */
    reveal(x: number, y: number): void {
        if (true /*game.stopPlay*/) {
            return;
        }

        // if(game.firstClick){
        //   mineGenerator.generateMines(x, y);
        //   game.firstClick = false;
        // }

        // var square = minefield.getSquare(x, y); 

        // if(square.flagPlanted)
        //     return;

        // switch(square.value){
        //     case 0:
        //         minefield.revealOpenField(x, y);
        //         break;
        //     case -1:
        //         square.show = true;
        //         game.stopPlay = true;
        //         break;
        //     default:
        //         square.show = true;
        //         break;
        // }
    }
}