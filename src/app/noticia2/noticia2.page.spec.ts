import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia2Page } from './noticia2.page';

describe('Noticia2Page', () => {
  let component: Noticia2Page;
  let fixture: ComponentFixture<Noticia2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticia2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticia2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
