import { Component, OnInit } from '@angular/core';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  public registerLink = environment.registerLink;

  constructor() { }

  ngOnInit(): void {
  }

}
