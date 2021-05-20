import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopDetailsComponent } from './shop-details.component';

const routes: Routes = [{ path: '', component: ShopDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopDetailsRoutingModule { }
