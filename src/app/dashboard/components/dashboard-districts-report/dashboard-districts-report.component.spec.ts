import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDistrictsReportComponent } from './dashboard-districts-report.component';

describe('DashboardDistrictsReportComponent', () => {
  let component: DashboardDistrictsReportComponent;
  let fixture: ComponentFixture<DashboardDistrictsReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardDistrictsReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDistrictsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
