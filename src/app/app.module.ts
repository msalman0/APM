import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './product/product.module';
import { CustomerComponent } from './customer/customer.component';
import { CustomerModule } from './customer/customer.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'welcome' , component: WelcomeComponent , pathMatch : 'full'},
      {path: '**' ,redirectTo: 'welcome', pathMatch : 'full'}
    ]),
    ProductModule,
    CustomerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
