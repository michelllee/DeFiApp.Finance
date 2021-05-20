import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }
  // Masonary gallery
  showMasonry = true;
  masonarygallery = [
    { img: 'assets/images/gallery-1.jpg', colclass: 'col-lg-6 col-sm-12' },
    { img: 'assets/images/gallery-2.jpg', colclass: 'col-lg-6 col-sm-12' },
    { img: 'assets/images/gallery-3.jpg', colclass: 'col-lg-3 col-md-6 col-sm-12' },
    { img: 'assets/images/gallery-4.jpg', colclass: 'col-lg-3 col-md-6 col-sm-12' },
  ];

  ngOnInit(): void {
  }

}
