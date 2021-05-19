import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import navigation from '../../../data/navigation.json';

@Component({
  selector: 'app-header-three',
  templateUrl: './header-three.component.html',
  styleUrls: ['./header-three.component.css']
})
export class HeaderThreeComponent implements OnInit {

  closeResult: string | undefined;
  constructor(private modalService: NgbModal,@Inject(DOCUMENT) document:any) { }
  modalOpen(content: any) {
    this.modalService.open(content, { size: 'lg', windowClass: 'search-modal' });
  }
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
