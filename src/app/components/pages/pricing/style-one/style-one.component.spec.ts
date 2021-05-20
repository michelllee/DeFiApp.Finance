import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleOneComponent } from './style-one.component';

describe('StyleOneComponent', () => {
  let component: StyleOneComponent;
  let fixture: ComponentFixture<StyleOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
