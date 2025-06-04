import { Component, OnInit } from '@angular/core';
import { MinefieldService } from '../services/minefield.service';
import { Square } from '../models/square';

@Component({
    selector: 'ms-field',
    templateUrl: './field.component.html',
    styleUrls: ['./field.component.less']
})
export class FieldComponent implements OnInit {

    field: [Square[]];

    constructor(
        private minefieldService: MinefieldService
    ) { }

    ngOnInit() {
        this.minefieldService.field$.subscribe(field =>
            this.field = field
        );
    }
}
