import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import navigation from '../../../data/navigation.json';

@Component({
  selector: 'app-header-two',
  templateUrl: './header-two.component.html',
  styleUrls: ['./header-two.component.css']
})
export class HeaderTwoComponent implements OnInit {

  constructor(@Inject(DOCUMENT) document:any) { }
  public navigation = navigation;
  // Navigation
  navMethod: boolean = true;
  toggleNav() {
    this.navMethod = !this.navMethod;
  }
  // Mobile 
  open: boolean = false;
  trigger(item: { open: boolean; }){
    item.open = !item.open;
  }
  // Sticky Header
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(_e:any) {
     if (window.pageYOffset > 110) {
       let element = <HTMLElement>document.getElementById('sticky-header');
       element.classList.add('sticky');
     } else {
      let element = <HTMLElement>document.getElementById('sticky-header');
        element.classList.remove('sticky'); 
     }
  }
  // Add class on resize and onload window
  visible: boolean = false;
  breakpoint: number = 991;
  public innerWidth: any;
  detectHeader() {
    this.innerWidth = window.innerWidth;
    this.visible = this.innerWidth >= this.breakpoint;
  }

  ngOnInit(): void {
    this.detectHeader();
  }

}
