import { Component, OnInit } from '@angular/core';
import pricing from '../../../../data/pricing.json';

@Component({
  selector: 'app-style-one',
  templateUrl: './style-one.component.html',
  styleUrls: ['./style-one.component.css']
})
export class StyleOneComponent implements OnInit {

  constructor() { }
  public pricing = pricing;

  ngOnInit(): void {
  }

}
