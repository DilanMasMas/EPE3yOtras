import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticiac1Page } from './noticiac1.page';

describe('Noticiac1Page', () => {
  let component: Noticiac1Page;
  let fixture: ComponentFixture<Noticiac1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticiac1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticiac1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
