import { Component, OnInit } from '@angular/core';
import speaker from '../../../../data/speaker.json';

@Component({
  selector: 'app-teamblock',
  templateUrl: './teamblock.component.html',
  styleUrls: ['./teamblock.component.css']
})
export class TeamblockComponent implements OnInit {

  constructor() { }
  // pagination
  page: number = 1;
  public speaker = speaker;

  ngOnInit(): void {
  }

}
