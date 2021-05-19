import { Component, OnInit } from '@angular/core';
import pricing from '../../../../data/pricing.json';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  constructor() { }
  public pricing = pricing;

  ngOnInit(): void {
  }

}
