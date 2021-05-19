import { Component, OnInit } from '@angular/core';
import speakers from '../../../../data/speaker.json'

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor() { }
  public speakers = speakers;

  ngOnInit(): void {
  }

}
