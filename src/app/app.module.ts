import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import {RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { ProductList } from './product/product-list.component';
import { ConvertToSpacesPipe } from './shared/convertToSpaces.pipe';
import { StarComponenet } from './shared/star.componenet';
import { ProductDetailsComponent } from './product/product-details.component';
import { WelcomeComponent } from './home/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductList,
    ConvertToSpacesPipe,
    StarComponenet,
    ProductDetailsComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path : 'products' , component : ProductList},
      {path : 'products/:id' , component : ProductDetailsComponent},
      {path: 'welcome' , component: WelcomeComponent , pathMatch : 'full'},
      {path: '**' ,redirectTo: 'welcome', pathMatch : 'full'}
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
