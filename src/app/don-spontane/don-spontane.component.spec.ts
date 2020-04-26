import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonSpontaneComponent } from './don-spontane.component';

describe('DonSpontaneComponent', () => {
  let component: DonSpontaneComponent;
  let fixture: ComponentFixture<DonSpontaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonSpontaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonSpontaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
