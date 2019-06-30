import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia6Page } from './noticia6.page';

describe('Noticia6Page', () => {
  let component: Noticia6Page;
  let fixture: ComponentFixture<Noticia6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticia6Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticia6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
