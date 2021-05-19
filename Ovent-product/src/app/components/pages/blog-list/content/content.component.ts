import { Component, OnInit } from '@angular/core';
import blog from '../../../../data/blog/blog.json';
import author from '../../../../data/speaker.json';

import category from '../../../../data/blog/category.json';
import tags from '../../../../data/blog/tags.json';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }
  // Pagination
  page: number = 1;
  public blogpost = blog;
  public category = category;
  public tags = tags;
  public author = author;
  public getCategory(items: string | any[]) {
    var elems = category.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  public getTags(items: string | any[]) {
    var elems = tags.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  public getAuthor(items: string | any[]) {
    var elems = author.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }

  ngOnInit(): void {
  }

}
