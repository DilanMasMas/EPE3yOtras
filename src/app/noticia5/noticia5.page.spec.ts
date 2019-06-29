import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia5Page } from './noticia5.page';

describe('Noticia5Page', () => {
  let component: Noticia5Page;
  let fixture: ComponentFixture<Noticia5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticia5Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticia5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
