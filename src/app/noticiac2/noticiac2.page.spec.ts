import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticiac2Page } from './noticiac2.page';

describe('Noticiac2Page', () => {
  let component: Noticiac2Page;
  let fixture: ComponentFixture<Noticiac2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Noticiac2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticiac2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
