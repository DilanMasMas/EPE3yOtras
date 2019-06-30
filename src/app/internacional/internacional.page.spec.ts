import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternacionalPage } from './internacional.page';

describe('InternacionalPage', () => {
  let component: InternacionalPage;
  let fixture: ComponentFixture<InternacionalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternacionalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternacionalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
