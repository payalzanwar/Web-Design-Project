import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsHeaderImgComponent } from './contact-us-header-img.component';

describe('ContactUsHeaderImgComponent', () => {
  let component: ContactUsHeaderImgComponent;
  let fixture: ComponentFixture<ContactUsHeaderImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactUsHeaderImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsHeaderImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
