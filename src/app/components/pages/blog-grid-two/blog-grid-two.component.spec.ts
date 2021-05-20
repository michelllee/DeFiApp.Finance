import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogGridTwoComponent } from './blog-grid-two.component';

describe('BlogGridTwoComponent', () => {
  let component: BlogGridTwoComponent;
  let fixture: ComponentFixture<BlogGridTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogGridTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogGridTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
