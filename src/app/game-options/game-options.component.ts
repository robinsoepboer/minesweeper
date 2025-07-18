import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { GameService } from '../services/game.service';
import { Difficulty } from '../models/difficulty';
import { MinefieldService } from '../services/minefield.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'ms-game-options',
    templateUrl: './game-options.component.html',
    styleUrls: ['./game-options.component.less'],
    standalone: true,
    imports: [FormsModule]
})
export class GameOptionsComponent implements OnInit {
    show: boolean = false;
    difficulties: Difficulty[];
    selectedDifficulty: Difficulty;

    constructor(
        private configService: ConfigService,
        private gameService: GameService,
        private minefieldService: MinefieldService
    ) { }

    ngOnInit(): void {
        this.difficulties = this.configService.difficulties;
        this.selectedDifficulty = this.difficulties[0];
    }

    toggleDialog(): void {
        this.show = !this.show;
    }

    newGame(): void {
        this.configService.mines = this.selectedDifficulty.mines;
        this.configService.height = this.selectedDifficulty.height;
        this.configService.width = this.selectedDifficulty.width;

        this.minefieldService.generateNewField();
        this.gameService.newGame();
        this.show = false;
    }

    selectDifficulty(difficulty): void {
        this.selectedDifficulty = difficulty;
    }

}
