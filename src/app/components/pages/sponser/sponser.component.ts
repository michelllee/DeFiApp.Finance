import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sponser',
  templateUrl: './sponser.component.html',
  styleUrls: ['./sponser.component.css']
})
export class SponserComponent implements OnInit {

  constructor() { }
  // Footer style
  classname = "footer-area footer-area-v1 footer-area-v3  bg_cover";
  ftlogo = "assets/images/logo-2.png";
  ftbg = "assets/images/footer-3.jpg";

  ngOnInit(): void {
  }

}
