import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsHeaderImageComponent } from './about-us-header-image.component';

describe('AboutUsHeaderImageComponent', () => {
  let component: AboutUsHeaderImageComponent;
  let fixture: ComponentFixture<AboutUsHeaderImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutUsHeaderImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsHeaderImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
