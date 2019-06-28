import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaOtraPage } from './pagina-otra.page';

describe('PaginaOtraPage', () => {
  let component: PaginaOtraPage;
  let fixture: ComponentFixture<PaginaOtraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaOtraPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaOtraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
