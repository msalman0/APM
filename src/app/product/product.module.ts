import { NgModule } from '@angular/core';
import { ProductList } from './product-list.component';
import { ConvertToSpacesPipe } from '../shared/convertToSpaces.pipe';
import { ProductDetailsComponent } from './product-details.component';
import { RouterModule } from '@angular/router';
import { ProductDetailsGuard } from './product-details.guard';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProductList,
    ConvertToSpacesPipe,
    ProductDetailsComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path : 'products' , component : ProductList},
      {
        path : 'products/:id' , 
        component : ProductDetailsComponent,
        canActivate : [ProductDetailsGuard]
      },
    ]),
    
  ]
})
export class ProductModule { }
