import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.css']
})
export class BackToTopComponent implements OnInit {

  constructor() { }
  ScrolltoTop() {
    const navbar = <HTMLElement>document.getElementById('backToTop');
    if (document.body.scrollTop >= 300 || document.documentElement.scrollTop > 300) {
      navbar.classList.add('d-block');
    } else {
      navbar.classList.remove('d-block');
    }
  }
  isShow: boolean | undefined;
  topPosToStartShowing = 600;

  @HostListener('window:scroll')
  checkScroll() {

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  // TODO: Cross browsing
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  ngOnInit(): void {
  }

}
