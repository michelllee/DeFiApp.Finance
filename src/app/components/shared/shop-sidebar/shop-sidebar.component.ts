import { Component, OnInit } from '@angular/core';
import shopcategory from '../../../data/shop/category.json'
import shoptags from '../../../data/shop/tags.json'

@Component({
  selector: 'app-shop-sidebar',
  templateUrl: './shop-sidebar.component.html',
  styleUrls: ['./shop-sidebar.component.css']
})
export class ShopSidebarComponent implements OnInit {

  constructor() { }
  public shopcategory = shopcategory;
  public shoptags = shoptags;

  ngOnInit(): void {
  }

}
