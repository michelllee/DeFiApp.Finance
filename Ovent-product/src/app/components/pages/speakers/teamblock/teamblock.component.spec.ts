import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamblockComponent } from './teamblock.component';

describe('TeamblockComponent', () => {
  let component: TeamblockComponent;
  let fixture: ComponentFixture<TeamblockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamblockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
