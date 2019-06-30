import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia10Page } from './noticia10.page';

describe('Noticia10Page', () => {
  let component: Noticia10Page;
  let fixture: ComponentFixture<Noticia10Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticia10Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticia10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
