import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyquillEditorComponent } from './myquill-editor.component';

describe('MyquillEditorComponent', () => {
  let component: MyquillEditorComponent;
  let fixture: ComponentFixture<MyquillEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyquillEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyquillEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
