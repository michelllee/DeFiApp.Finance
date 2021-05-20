import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speaker-details',
  templateUrl: './speaker-details.component.html',
  styleUrls: ['./speaker-details.component.css']
})
export class SpeakerDetailsComponent implements OnInit {

  constructor() { }
  // Footer style
  classname = "footer-area footer-area-v1 footer-area-v3  bg_cover";
  ftlogo = "assets/images/logo-2.png";
  ftbg = "assets/images/footer-3.jpg";

  ngOnInit(): void {
  }

}
