import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSignedoutComponent } from './navbar-signedout.component';

describe('NavbarSignedoutComponent', () => {
  let component: NavbarSignedoutComponent;
  let fixture: ComponentFixture<NavbarSignedoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarSignedoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarSignedoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
