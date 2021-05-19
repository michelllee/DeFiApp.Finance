import { Component, AfterContentInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import shop from '../../../../data/shop/shop.json';
import category from '../../../../data/shop/category.json';
import author from '../../../../data/speaker.json';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements AfterContentInit {
  constructor(private router: ActivatedRoute) { }
  public shopdetails = shop;
  public getCategory(items: string | any[]) {
    var elems = category.filter((item: { id: string; }) => {
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

  // Increment decrement
  public counter: number = 1
  increment() {
    this.counter += 1;
  }
  decrement() {
    this.counter -= 1;
  }
  // 
  settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: '.product-thumb-slide'
  };
  settingsThumb = {
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.product-big-slide',
    dots: false,
    centerMode: true,
    arrows: false,
    centerPadding: "0",
    focusOnSelect: true
  };

  public setPost(id: any) {
    this.shopdetails = shop.filter((item: { id: any; }) => { return item.id == id });
  }

  ngAfterContentInit(): void {
    this.setPost(this.router.snapshot.params.id);
  }

}
