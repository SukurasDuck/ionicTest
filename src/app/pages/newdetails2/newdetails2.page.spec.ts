import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Newdetails2Page } from './newdetails2.page';

describe('Newdetails2Page', () => {
  let component: Newdetails2Page;
  let fixture: ComponentFixture<Newdetails2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Newdetails2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Newdetails2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
