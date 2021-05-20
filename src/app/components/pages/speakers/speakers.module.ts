import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { SpeakersRoutingModule } from './speakers-routing.module';
import { SpeakersComponent } from './speakers.component';
import { SharedModule } from '../../shared/shared.module';
import { TeamblockComponent } from './teamblock/teamblock.component';
import { PricingComponent } from './pricing/pricing.component';


@NgModule({
  declarations: [SpeakersComponent, TeamblockComponent, PricingComponent],
  imports: [
    CommonModule,
    SpeakersRoutingModule,
    SharedModule,
    NgbModule,
    NgxPaginationModule
  ]
})
export class SpeakersModule { }
