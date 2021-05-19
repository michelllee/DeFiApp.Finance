import { Component, OnInit } from '@angular/core';
import speaker from '../../../data/speaker.json';

@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.css']
})
export class SpeakerComponent implements OnInit {

  constructor() { }
  public speaker = speaker;

  ngOnInit(): void {
  }

}
