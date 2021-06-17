import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements OnInit {
  classname = 'footer-area footer-area-v1 footer-area-v3  bg_cover';
  ftlogo = 'assets/images/logo-2.png';
  ftbg = 'assets/images/footer-3.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
