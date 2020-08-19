import { Component, OnChanges, SimpleChanges, Input, Output , EventEmitter } from '@angular/core';


@Component({
    selector: 'pm-star',
    styleUrls: ['./star.component.css'],
    templateUrl:'./star.component.html'
}) 
    

export class StarComponenet implements OnChanges{
    
    @Input() rating: number ;
    starWidth: number;
    @Output() ratingClicked : EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(changes: SimpleChanges): void {
        this.starWidth= this.rating *75 /5;
    }

    onClick() : void {
        this.ratingClicked.emit(`The Rating is ${this.rating}`);
    }


}