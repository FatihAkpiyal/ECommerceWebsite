import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketComponent } from './basket.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BasketComponent,
    RouterModule.forChild([
      {path:"", component:BasketComponent}
    ])
  ]
})
export class BasketModule { }
