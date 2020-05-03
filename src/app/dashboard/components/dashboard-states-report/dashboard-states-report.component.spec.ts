import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { getCovidDistrictData } from 'src/app/core/fixtures/covid-district-data';
import { getCovidStateData } from 'src/app/core/fixtures/covid-state-data';
import { CovidDistrictReportMetaData } from 'src/app/core/models/covid-district-report';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardStatesReportComponent } from './dashboard-states-report.component';


@Component({
  selector: 'covid-app-dashboard-districts-report',
  template: ''
})
class MockDashboardDistrictsReportComponent {
  @Input() districtData: CovidDistrictReportMetaData;
}

describe('DashboardStatesReportComponent', () => {
  let component: DashboardStatesReportComponent;
  let fixture: ComponentFixture<DashboardStatesReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardStatesReportComponent, MockDashboardDistrictsReportComponent],
      imports: [SharedModule, BrowserAnimationsModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              data: {
                dashboardStateData: getCovidStateData(),
                dashboardDistrictData: getCovidDistrictData()
              }
            }
          }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardStatesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // District details are not shown for state "Total"
  it('should not show district data when state code is "TT" i.e., Total show for others', () => {
    fixture.detectChanges();
    const debugDashboardDistrictComponent = fixture.debugElement.queryAll(By.directive(MockDashboardDistrictsReportComponent));
    expect(debugDashboardDistrictComponent.length).toBe(component.reports.length - 1);
  });

  // First object of my mock data is for state "Total"
  it('should ensure that panel does not open when state is "Total" i.e., accordian should not trgger action', () => {
    const event = new Event('click');
    spyOn(event, 'stopPropagation');
    const tableDebugElement = document.querySelector('.table');
    tableDebugElement.dispatchEvent(event);
    expect(event.stopPropagation).toHaveBeenCalled();
  });

  // Second object of my mock data is for state  other than "Total"
  it('should ensure that panel open when state is not "Total" i.e., accordian should trgger action', () => {
    fixture.detectChanges();
    spyOn(component, 'onClick').and.callThrough();
    const tableDebugElement = fixture.debugElement.queryAll(By.css('.table'))[1];
    tableDebugElement.triggerEventHandler('click', {});
    fixture.detectChanges();
    expect(component.onClick).toHaveBeenCalled();
  });
});
