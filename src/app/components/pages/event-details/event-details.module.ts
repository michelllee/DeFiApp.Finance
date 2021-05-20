import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { EventDetailsRoutingModule } from './event-details-routing.module';
import { EventDetailsComponent } from './event-details.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [EventDetailsComponent, ContentComponent],
  imports: [
    CommonModule,
    EventDetailsRoutingModule,
    SharedModule,
    NgbModule,
    HttpClientModule
  ]
})
export class EventDetailsModule { }
