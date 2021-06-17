import {Component, OnInit, HostListener, Inject, Input} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import navigation from '../../../data/navigation.json';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-header-two',
  templateUrl: './header-two.component.html',
  styleUrls: ['./header-two.component.css']
})
export class HeaderTwoComponent implements OnInit {

  constructor(@Inject(DOCUMENT) document:any) { }
  public navigation = navigation;
  public registerLink = environment.registerLink;
  // Navigation
  navMethod: boolean = true;
  @Input() sticky = false;
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

    if(this.sticky){
      return;
    }
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
