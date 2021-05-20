import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'angular-crumbs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgMasonryGridModule } from 'ng-masonry-grid';


import { BackToTopComponent } from './back-to-top/back-to-top.component';
import { BlogSidebarComponent } from './blog-sidebar/blog-sidebar.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { CounterComponent } from './counter/counter.component';
import { FilterEventComponent } from './filter-event/filter-event.component';
import { FilterEventTwoComponent } from './filter-event-two/filter-event-two.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HeaderTwoComponent } from './header-two/header-two.component';
import { HeaderThreeComponent } from './header-three/header-three.component';
import { MasonryBlogComponent } from './masonry-blog/masonry-blog.component';
import { SpeakerComponent } from './speaker/speaker.component';
import { SponsersComponent } from './sponsers/sponsers.component';
import { ItemComponent } from './item/item.component';
import { ShopSidebarComponent } from './shop-sidebar/shop-sidebar.component';



@NgModule({
  declarations: [BackToTopComponent, BlogSidebarComponent, BreadcrumbComponent, CounterComponent, FilterEventComponent, FilterEventTwoComponent, FooterComponent, HeaderComponent, HeaderTwoComponent, HeaderThreeComponent, MasonryBlogComponent, SpeakerComponent, SponsersComponent, ItemComponent, ShopSidebarComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    BreadcrumbModule,
    NgMasonryGridModule,
    NgCircleProgressModule.forRoot()
  ],
  exports: [BackToTopComponent, BlogSidebarComponent, BreadcrumbComponent, CounterComponent, FilterEventComponent, FilterEventTwoComponent, FooterComponent, HeaderComponent, HeaderTwoComponent, HeaderThreeComponent, MasonryBlogComponent, SpeakerComponent, SponsersComponent, ShopSidebarComponent], 
})
export class SharedModule { }
