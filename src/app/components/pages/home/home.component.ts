import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  // Footer style
  classname = "footer-area footer-area-v1 bg_cover";
  ftlogo = "assets/images/logo-2.png";
  ftbg = "assets/images/footer-1.jpg";

  ngOnInit(): void {
  }

}
