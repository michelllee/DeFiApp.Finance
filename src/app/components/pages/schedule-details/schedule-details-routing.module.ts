import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleDetailsComponent } from './schedule-details.component';

const routes: Routes = [{ path: '', component: ScheduleDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleDetailsRoutingModule { }
