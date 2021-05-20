import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { SharedModule } from '../../shared/shared.module';
import { AbouttextComponent } from './abouttext/abouttext.component';
import { BlogpostComponent } from './blogpost/blogpost.component';


@NgModule({
  declarations: [AboutComponent, AbouttextComponent, BlogpostComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule,
    NgbModule,
    SlickCarouselModule
  ]
})
export class AboutModule { }
