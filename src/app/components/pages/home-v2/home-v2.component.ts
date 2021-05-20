import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-v2',
  templateUrl: './home-v2.component.html',
  styleUrls: ['./home-v2.component.css']
})
export class HomeV2Component implements OnInit {

  constructor() { }
  // Footer style
  classname = "footer-area footer-area-v1 footer-area-v2 bg_cover";
  ftlogo = "assets/images/logo-1.png";
  ftbg = "assets/images/footer-2.jpg";

  ngOnInit(): void {
  }

}
