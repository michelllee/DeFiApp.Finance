import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleTwoComponent } from './style-two.component';

describe('StyleTwoComponent', () => {
  let component: StyleTwoComponent;
  let fixture: ComponentFixture<StyleTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
