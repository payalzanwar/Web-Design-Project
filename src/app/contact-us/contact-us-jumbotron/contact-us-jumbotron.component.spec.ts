import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsJumbotronComponent } from './contact-us-jumbotron.component';

describe('ContactUsJumbotronComponent', () => {
  let component: ContactUsJumbotronComponent;
  let fixture: ComponentFixture<ContactUsJumbotronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactUsJumbotronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsJumbotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
