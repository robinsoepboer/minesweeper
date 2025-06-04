import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Square } from '../models/square';
import { MinefieldService } from '../services/minefield.service';
import { GameService } from '../services/game.service';
import { MineGeneratorService } from '../services/mine-generator.service';

@Component({
    selector: 'ms-square',
    templateUrl: './square.component.html',
    styleUrls: ['./square.component.less']
})
export class SquareComponent implements OnInit {

    @Input() square!: Square;

    constructor(
        private elementRef: ElementRef,
        private minefieldService: MinefieldService,
        private gameService: GameService,
        private mineGeneratorService: MineGeneratorService
    ) { }

    ngOnInit(): void {
        // Subscribe to focus$ property which will be 'next' when the current square should receive focus
        this.square.focus$.subscribe(() => {
            if(this.elementRef){
                this.elementRef.nativeElement.children[0].focus();
            }
        });
    }

    /**
     * Function used in ng-class directive, determines which class a square should receive
     */
    determineClass(): string {
        if (this.square.flagPlanted) {
            if (this.gameService.stopPlay && this.square.value !== -1) {
                return 'flag flag-wrong';
            }

            return 'flag';
        }

        if (this.gameService.isVictorious() && this.square.value === -1 && !this.square.show) {
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

    /**
     * Right click event: plants a flag on a square
     */
    plantFlag(): void {
        if (this.square.show)
            return;

        if (this.gameService.stopPlay)
            return;

        if (!this.square.flagPlanted) {
            this.square.flagPlanted = true;
            this.gameService.flagsLeft--;
        } else {
            this.square.flagPlanted = false;
            this.gameService.flagsLeft++;
        }
    }

    /**
     * Determines whether the square's value will be displayed (mines and open field will not have their value displayed)
     */
    displayText(): string {
        return this.square.show && this.square.value > 0 && !this.square.flagPlanted ? this.square.value.toString() : '';
    }

    /**
     * click event: Reveal a square
     */
    reveal(): void {
        if (this.gameService.stopPlay || this.square.show) {
            return;
        }

        if(this.gameService.firstClick){
          this.mineGeneratorService.generate(this.square);
          this.gameService.firstClick = false;
          this.gameService.startTimer();
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
                this.gameService.stopTimer();
                break;
            default:
                this.gameService.squaresLeft--;
                this.square.show = true;
                break;
        }
    }

    handleArrowKeys(event: KeyboardEvent): void {
        switch(event.key){
            /* Left arrow key */
            case 'ArrowLeft':
            this.minefieldService.getSquare(this.square.x - 1, this.square.y).giveFocus();
            break;

            /* Up arrow key */
            case 'ArrowUp':
            this.minefieldService.getSquare(this.square.x, this.square.y - 1).giveFocus();
            break;

            /* Right arrow key */
            case 'ArrowRight':
            this.minefieldService.getSquare(this.square.x + 1, this.square.y).giveFocus();
            break;

            /* Down arrow key */
            case 'ArrowDown':
            this.minefieldService.getSquare(this.square.x, this.square.y + 1).giveFocus();
            break;

            /* Space bar key */
            case ' ':
            this.plantFlag();
            event.preventDefault();
            break;
        }
    }

    handleMouseDown(): void {
        this.gameService.mouseDown = true;
    }

    handleMouseUp(): void {
        this.gameService.mouseDown = false;
    }
}
