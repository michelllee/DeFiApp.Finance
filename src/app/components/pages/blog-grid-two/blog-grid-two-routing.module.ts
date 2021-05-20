import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogGridTwoComponent } from './blog-grid-two.component';

const routes: Routes = [{ path: '', component: BlogGridTwoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogGridTwoRoutingModule { }
