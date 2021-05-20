import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';

import { BlogGridTwoRoutingModule } from './blog-grid-two-routing.module';
import { BlogGridTwoComponent } from './blog-grid-two.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [BlogGridTwoComponent, ContentComponent],
  imports: [
    CommonModule,
    BlogGridTwoRoutingModule,
    SharedModule,
    NgbModule,
    NgxPaginationModule,
    HttpClientModule
  ]
})
export class BlogGridTwoModule { }
