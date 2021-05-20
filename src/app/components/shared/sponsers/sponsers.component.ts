import { Component, OnInit } from '@angular/core';
import sponsers from '../../../data/sponser.json';

@Component({
  selector: 'app-sponsers',
  templateUrl: './sponsers.component.html',
  styleUrls: ['./sponsers.component.css']
})
export class SponsersComponent implements OnInit {

  constructor() { }
  public sponsers = sponsers;

  ngOnInit(): void {
  }

}
