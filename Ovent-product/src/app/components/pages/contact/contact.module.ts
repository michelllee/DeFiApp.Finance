import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [ContactComponent, ContentComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class ContactModule { }
