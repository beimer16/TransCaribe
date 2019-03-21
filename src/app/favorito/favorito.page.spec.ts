import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritoPage } from './favorito.page';

describe('FavoritoPage', () => {
  let component: FavoritoPage;
  let fixture: ComponentFixture<FavoritoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
