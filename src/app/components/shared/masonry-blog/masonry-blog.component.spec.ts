import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasonryBlogComponent } from './masonry-blog.component';

describe('MasonryBlogComponent', () => {
  let component: MasonryBlogComponent;
  let fixture: ComponentFixture<MasonryBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasonryBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasonryBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
