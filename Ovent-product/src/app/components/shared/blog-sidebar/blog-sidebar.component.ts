import { Component, OnInit } from '@angular/core';
import blog from '../../../data/blog/blog.json';
import category from '../../../data/blog/category.json';
import tags from '../../../data/blog/tags.json';
import instagram from '../../../data/instagram.json';
import twitterfeeds from '../../../data/twitterfeeds.json';

@Component({
  selector: 'app-blog-sidebar',
  templateUrl: './blog-sidebar.component.html',
  styleUrls: ['./blog-sidebar.component.css']
})
export class BlogSidebarComponent implements OnInit {

  constructor() { }

  public blog = blog;
  public category = category;
  public tags = tags;
  public instagram = instagram;
  public twitterfeeds = twitterfeeds;

  public setCategoriesCount(){
    for(var i = 0; i < this.category.length; i++){
      var count = this.blog.filter( (post: { category: number[]; }) => { return post.category.includes( parseInt( this.category[i].id ) ) } );
      count = count.length;
      this.category[i].count = count;
    }
  }
  ngOnInit(): void {
    this.setCategoriesCount();
  }

}
