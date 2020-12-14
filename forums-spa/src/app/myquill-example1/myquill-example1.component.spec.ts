import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyquillExample1Component } from './myquill-example1.component';

describe('MyquillExample1Component', () => {
  let component: MyquillExample1Component;
  let fixture: ComponentFixture<MyquillExample1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyquillExample1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyquillExample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
