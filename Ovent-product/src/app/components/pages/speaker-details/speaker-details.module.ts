import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HttpClientModule } from '@angular/common/http';

import { SpeakerDetailsRoutingModule } from './speaker-details-routing.module';
import { SpeakerDetailsComponent } from './speaker-details.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';
import { BlogpostComponent } from './blogpost/blogpost.component';


@NgModule({
  declarations: [SpeakerDetailsComponent, ContentComponent, BlogpostComponent],
  imports: [
    CommonModule,
    SpeakerDetailsRoutingModule,
    SharedModule,
    NgbModule,
    SlickCarouselModule,
    HttpClientModule
  ]
})
export class SpeakerDetailsModule { }
