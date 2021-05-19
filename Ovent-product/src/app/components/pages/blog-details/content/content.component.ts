import { Component, AfterContentInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import blogpost from '../../../../data/blog/blog.json';
import blogcategory from '../../../../data/blog/category.json';
import blogtags from '../../../../data/blog/tags.json';
import authors from '../../../../data/speaker.json';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements AfterContentInit {

  constructor(private router: ActivatedRoute) { }
  public blogdetails = blogpost;
  public blogpost = blogpost;
  public tags = blogtags;
  public blogcategory = blogcategory;
  public authors = authors;
  public getCategory(items: string | any[]) {
    var elems = blogcategory.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  public getAuthor(items: string | any[]) {
    var elems = authors.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  public getBlogTags(items: string | any[]) {
    var elems = blogtags.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  settings = {
    arrows: false,
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  public setPost(id: any) {
    this.blogdetails = blogpost.filter((item: { id: any; }) => { return item.id == id });
  }
  ngAfterContentInit(): void {
    this.setPost(this.router.snapshot.params.id);
  }

}
