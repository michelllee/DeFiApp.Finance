import { Component, OnInit } from '@angular/core';
import category from '../../../data/event/category.json';
import event from '../../../data/event/event.json';
import organiser from '../../../data/speaker.json';
import { Category } from '../category';
import { Item } from '../item';

@Component({
  selector: 'app-filter-event-two',
  templateUrl: './filter-event-two.component.html',
  styleUrls: ['./filter-event-two.component.css']
})
export class FilterEventTwoComponent implements OnInit {

  constructor() { }
  public category = category;
  public event = event;
  public organiser = organiser;

  public getOrganiser(items: string | any[]) {
    var elems = organiser.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  public getCategory(items: string | any[]) {
    var elems = category.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }

  items: Item[] = event;
  categories: Category[] = category;
  filteredItems: Item[] = [...this.items];
  filterItemsByCategory(category: Category) {
    this.filteredItems = this.items.filter((item: Item) => {
      return item.category.includes(category.id);
    })
  }
  reset() {
    this.filteredItems = [...this.items];
  }
  ngOnInit(): void {
  }

}
