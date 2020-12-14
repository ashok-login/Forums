import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicSearchFilterComponent } from './dynamic-search-filter.component';

describe('DynamicSearchFilterComponent', () => {
  let component: DynamicSearchFilterComponent;
  let fixture: ComponentFixture<DynamicSearchFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicSearchFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicSearchFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
