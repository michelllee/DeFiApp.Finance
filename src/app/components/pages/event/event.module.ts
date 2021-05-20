import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { EventComponent } from './event.component';
import { SharedModule } from '../../shared/shared.module';
import { AboutTextComponent } from './about-text/about-text.component';
import { VideoComponent } from './video/video.component';


@NgModule({
  declarations: [EventComponent, AboutTextComponent, VideoComponent],
  imports: [
    CommonModule,
    EventRoutingModule,
    SharedModule
  ]
})
export class EventModule { }
