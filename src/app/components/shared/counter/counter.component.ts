import { Component, OnInit } from '@angular/core';
import counter from '../../../data/counter.json';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() { }
  public counter = counter;

  ngOnInit(): void {
  }

}
