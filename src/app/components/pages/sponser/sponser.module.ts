import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SponserRoutingModule } from './sponser-routing.module';
import { SponserComponent } from './sponser.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [SponserComponent],
  imports: [
    CommonModule,
    SponserRoutingModule,
    SharedModule
  ]
})
export class SponserModule { }
