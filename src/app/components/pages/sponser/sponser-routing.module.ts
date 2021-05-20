import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SponserComponent } from './sponser.component';

const routes: Routes = [{ path: '', component: SponserComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SponserRoutingModule { }
