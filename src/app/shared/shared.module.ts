import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponenet } from './star.componenet';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StarComponenet,
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    StarComponenet,
    CommonModule,
    FormsModule
  ]
})

export class SharedModule { }
