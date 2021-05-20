import { Component, OnInit } from '@angular/core';
import blogpost from '../../../../data/blog/blog.json';
import speaker from '../../../../data/speaker.json';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.css']
})
export class BlogpostComponent implements OnInit {

  constructor() { }
  public blogpost = blogpost;
  public speaker = speaker;
  public getAuthor(items: string | any[]) {
    var elems = speaker.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  // 
  settings = {
    arrows: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 1500,
    prevArrow: '#arrows .arrow.prev',
    nextArrow: '#arrows .arrow.next',
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

  ngOnInit(): void {
  }

}
