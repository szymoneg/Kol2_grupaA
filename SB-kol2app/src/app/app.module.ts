import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DataService} from "./services/data.service";
import {HttpClientModule} from "@angular/common/http";
import { OrdersSBComponent } from './components/orders-sb/orders-sb.component';
import { OrdersItemSBComponent } from './components/orders-item-sb/orders-item-sb.component';
import { OrdersDetailsSBComponent } from './components/orders-details-sb/orders-details-sb.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdersSBComponent,
    OrdersItemSBComponent,
    OrdersDetailsSBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
