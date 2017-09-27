import { Injectable } from '@angular/core';
import { Difficulty } from '../models/difficulty';

@Injectable()
export class ConfigService {

    constructor() { }

    mines: number = 10;
    width: number = 9;
    height: number = 9;

    difficulties: Difficulty[] = [
        { name: 'easy', mines: 10, width: 9, height: 9, editable: false },
        { name: 'medium', mines: 40, width: 16, height: 16, editable: false },
        { name: 'hard', mines: 99, width: 30, height: 16, editable: false },
        { name: 'custom', mines: 10, width: 9, height: 9, editable: true }
    ];

    size(): number {
        return this.height * this.width;
    }
}
