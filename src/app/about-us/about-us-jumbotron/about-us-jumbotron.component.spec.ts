import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsJumbotronComponent } from './about-us-jumbotron.component';

describe('AboutUsJumbotronComponent', () => {
  let component: AboutUsJumbotronComponent;
  let fixture: ComponentFixture<AboutUsJumbotronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutUsJumbotronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsJumbotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
