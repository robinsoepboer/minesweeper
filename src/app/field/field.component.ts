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
}