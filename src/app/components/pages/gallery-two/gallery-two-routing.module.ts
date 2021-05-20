import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryTwoComponent } from './gallery-two.component';

const routes: Routes = [{ path: '', component: GalleryTwoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryTwoRoutingModule { }
