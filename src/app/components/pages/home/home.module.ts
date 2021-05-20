import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgxPageScrollModule } from 'ngx-page-scroll';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { AboutComponent } from './about/about.component';
import { VideoComponent } from './video/video.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [HomeComponent, BannerComponent, AboutComponent, VideoComponent, TeamComponent, ContactComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    NgbModule,
    SlickCarouselModule,
    NgxPageScrollModule
  ]
})
export class HomeModule { }
