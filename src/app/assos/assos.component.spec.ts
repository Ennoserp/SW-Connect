import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssosComponent } from './assos.component';

describe('AssosComponent', () => {
  let component: AssosComponent;
  let fixture: ComponentFixture<AssosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
