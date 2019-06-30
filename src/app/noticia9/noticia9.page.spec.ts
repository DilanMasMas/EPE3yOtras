import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia9Page } from './noticia9.page';

describe('Noticia9Page', () => {
  let component: Noticia9Page;
  let fixture: ComponentFixture<Noticia9Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticia9Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticia9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
