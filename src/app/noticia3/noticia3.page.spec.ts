import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia3Page } from './noticia3.page';

describe('Noticia3Page', () => {
  let component: Noticia3Page;
  let fixture: ComponentFixture<Noticia3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticia3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticia3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
