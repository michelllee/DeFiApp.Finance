import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-v3',
  templateUrl: './home-v3.component.html',
  styleUrls: ['./home-v3.component.css']
})
export class HomeV3Component implements OnInit {

  constructor() { }
  // Footer style
  classname = "footer-area footer-area-v1 footer-area-v3  bg_cover";
  ftlogo = "assets/images/logo-2.png";
  ftbg = "assets/images/footer-3.jpg";

  ngOnInit(): void {
  }

}
