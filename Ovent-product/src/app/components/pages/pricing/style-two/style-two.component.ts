import { Component, OnInit } from '@angular/core';
import pricing from '../../../../data/pricing.json';

@Component({
  selector: 'app-style-two',
  templateUrl: './style-two.component.html',
  styleUrls: ['./style-two.component.css']
})
export class StyleTwoComponent implements OnInit {

  constructor() { }
  public pricing = pricing;

  ngOnInit(): void {
  }

}
