import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpeakerDetailsComponent } from './speaker-details.component';

const routes: Routes = [{ path: '', component: SpeakerDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpeakerDetailsRoutingModule { }
