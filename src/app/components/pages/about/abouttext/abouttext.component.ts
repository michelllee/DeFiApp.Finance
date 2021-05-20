import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abouttext',
  templateUrl: './abouttext.component.html',
  styleUrls: ['./abouttext.component.css']
})
export class AbouttextComponent implements OnInit {

  constructor() { }
  aboutgrid = [
    {icon:'assets/images/icon/icon-4.png',title:'Who We Are?',text:'In order to save time you have to break down the content strategy for the event or conference'},
    {icon:'assets/images/icon/icon-5.png',title:'What We Do?',text:'In order to save time you have to break down the content strategy for the event or conference'},
    {icon:'assets/images/icon/icon-6.png',title:'Register Now',text:'In order to save time you have to break down the content strategy for the event or conference'},
  ];

  ngOnInit(): void {
  }

}
