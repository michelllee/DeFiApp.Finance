import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { NiceSelectModule } from "ng-nice-select";

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [ShopComponent, ContentComponent],
  imports: [
    CommonModule,
    ShopRoutingModule,
    SharedModule,
    NgbModule,
    NgxPaginationModule,
    HttpClientModule,
    NiceSelectModule
  ]
})
export class ShopModule { }
