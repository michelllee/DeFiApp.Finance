import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PricingRoutingModule } from './pricing-routing.module';
import { PricingComponent } from './pricing.component';
import { SharedModule } from '../../shared/shared.module';
import { StyleOneComponent } from './style-one/style-one.component';
import { StyleTwoComponent } from './style-two/style-two.component';


@NgModule({
  declarations: [PricingComponent, StyleOneComponent, StyleTwoComponent],
  imports: [
    CommonModule,
    PricingRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class PricingModule { }
