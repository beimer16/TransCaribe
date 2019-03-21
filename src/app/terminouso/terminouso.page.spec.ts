import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminousoPage } from './terminouso.page';

describe('TerminousoPage', () => {
  let component: TerminousoPage;
  let fixture: ComponentFixture<TerminousoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminousoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminousoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
