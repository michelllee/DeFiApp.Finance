import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HttpClientModule } from '@angular/common/http';

import { ShopDetailsRoutingModule } from './shop-details-routing.module';
import { ShopDetailsComponent } from './shop-details.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [ShopDetailsComponent, ContentComponent],
  imports: [
    CommonModule,
    ShopDetailsRoutingModule,
    SharedModule,
    NgbModule,
    HttpClientModule,
    SlickCarouselModule
  ]
})
export class ShopDetailsModule { }
