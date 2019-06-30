import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia11Page } from './noticia11.page';

describe('Noticia11Page', () => {
  let component: Noticia11Page;
  let fixture: ComponentFixture<Noticia11Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticia11Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticia11Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
