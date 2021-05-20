import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryTwoComponent } from './gallery-two.component';

describe('GalleryTwoComponent', () => {
  let component: GalleryTwoComponent;
  let fixture: ComponentFixture<GalleryTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
