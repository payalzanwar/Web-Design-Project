import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSignedinComponent } from './navbar-signedin.component';

describe('NavbarSignedinComponent', () => {
  let component: NavbarSignedinComponent;
  let fixture: ComponentFixture<NavbarSignedinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarSignedinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarSignedinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
