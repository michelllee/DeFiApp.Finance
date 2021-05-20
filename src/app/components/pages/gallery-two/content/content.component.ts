import { Component, OnInit } from '@angular/core';
import gallery from '../../../../data/gallery.json';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }
  // pagination
  page: number = 1;
  public gallery = gallery;

  ngOnInit(): void {
  }

}
