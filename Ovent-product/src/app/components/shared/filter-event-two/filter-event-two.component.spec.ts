import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterEventTwoComponent } from './filter-event-two.component';

describe('FilterEventTwoComponent', () => {
  let component: FilterEventTwoComponent;
  let fixture: ComponentFixture<FilterEventTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterEventTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterEventTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
