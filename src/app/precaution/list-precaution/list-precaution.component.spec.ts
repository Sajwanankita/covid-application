import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPrecautionComponent } from './list-precaution.component';

describe('ListPrecautionComponent', () => {
  let component: ListPrecautionComponent;
  let fixture: ComponentFixture<ListPrecautionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPrecautionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPrecautionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
