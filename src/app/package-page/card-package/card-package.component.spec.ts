import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPackageComponent } from './card-package.component';

describe('CardPackageComponent', () => {
  let component: CardPackageComponent;
  let fixture: ComponentFixture<CardPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
