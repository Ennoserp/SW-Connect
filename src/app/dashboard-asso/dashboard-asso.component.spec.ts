import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAssoComponent } from './dashboard-asso.component';

describe('DashboardAssoComponent', () => {
  let component: DashboardAssoComponent;
  let fixture: ComponentFixture<DashboardAssoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardAssoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAssoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
