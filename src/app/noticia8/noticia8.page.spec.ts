import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia8Page } from './noticia8.page';

describe('Noticia8Page', () => {
  let component: Noticia8Page;
  let fixture: ComponentFixture<Noticia8Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticia8Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticia8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
