import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardStatesReportComponent } from './dashboard-states-report.component';

describe('DashboardStatesReportComponent', () => {
  let component: DashboardStatesReportComponent;
  let fixture: ComponentFixture<DashboardStatesReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardStatesReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardStatesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
