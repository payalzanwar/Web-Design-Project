import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageOddComponent } from './package-odd.component';

describe('PackageOddComponent', () => {
  let component: PackageOddComponent;
  let fixture: ComponentFixture<PackageOddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageOddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageOddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
