import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgMasonryGridModule } from 'ng-masonry-grid';

import { HomeV3RoutingModule } from './home-v3-routing.module';
import { HomeV3Component } from './home-v3.component';
import { SharedModule } from '../../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { AboutComponent } from './about/about.component';
import { VideoComponent } from './video/video.component';
import { ContactComponent } from './contact/contact.component';
import { PricingComponent } from './pricing/pricing.component';
import { BlogpostComponent } from './blogpost/blogpost.component';
import { GalleryComponent } from './gallery/gallery.component';


@NgModule({
  declarations: [HomeV3Component, BannerComponent, AboutComponent, VideoComponent, ContactComponent, PricingComponent, BlogpostComponent, GalleryComponent],
  imports: [
    CommonModule,
    HomeV3RoutingModule,
    SharedModule,
    NgbModule,
    SlickCarouselModule,
    NgMasonryGridModule
  ]
})
export class HomeV3Module { }
