import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrdersSBComponent} from "./components/orders-sb/orders-sb.component";
import {OrdersDetailsSBComponent} from "./components/orders-details-sb/orders-details-sb.component";

const routes: Routes = [
  {
    path: '',
    component: OrdersSBComponent
  },
  {
    path: 'detail/:id',
    component: OrdersDetailsSBComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
