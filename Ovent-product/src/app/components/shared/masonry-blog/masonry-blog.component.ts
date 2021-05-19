import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-masonry-blog',
  templateUrl: './masonry-blog.component.html',
  styleUrls: ['./masonry-blog.component.css']
})
export class MasonryBlogComponent implements OnInit {

  constructor() { }
  showMasonry = true;

  ngOnInit(): void {
  }

}
