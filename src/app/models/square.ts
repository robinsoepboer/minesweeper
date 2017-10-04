import { Subject, Observable } from 'rxjs';

export class Square {
    value: number;
    show: boolean;
    flagPlanted: boolean;
    x: number;
    y: number;
    
    private focus: Subject<number>;
    focus$: Observable<number>;

    constructor(){
        this.focus = new Subject<number>();
        this.focus$ = this.focus.asObservable();
    }

    giveFocus(){
        this.focus.next(0);
    }
}
