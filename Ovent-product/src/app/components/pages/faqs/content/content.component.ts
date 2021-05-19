import { Component, OnInit } from '@angular/core';
import faqs from '../../../../data/faqs.json';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }
  public faqs = faqs;

  ngOnInit(): void {
  }

}
