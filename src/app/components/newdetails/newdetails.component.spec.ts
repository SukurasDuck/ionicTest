import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdetailsComponent } from './newdetails.component';

describe('NewdetailsComponent', () => {
  let component: NewdetailsComponent;
  let fixture: ComponentFixture<NewdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
