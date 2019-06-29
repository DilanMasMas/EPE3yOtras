import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia1Page } from './noticia1.page';

describe('Noticia1Page', () => {
  let component: Noticia1Page;
  let fixture: ComponentFixture<Noticia1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticia1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticia1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
