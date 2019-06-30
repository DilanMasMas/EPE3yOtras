import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia7Page } from './noticia7.page';

describe('Noticia7Page', () => {
  let component: Noticia7Page;
  let fixture: ComponentFixture<Noticia7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticia7Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticia7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
