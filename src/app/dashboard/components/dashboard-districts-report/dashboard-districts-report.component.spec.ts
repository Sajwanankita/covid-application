import { SimpleChange } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { getCovidDistrictData } from 'src/app/core/fixtures/covid-district-data';
import { CovidDistrictReportMetaData } from 'src/app/core/models/covid-district-report';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardDistrictsReportComponent } from './dashboard-districts-report.component';


describe('DashboardDistrictsReportComponent', () => {
  let component: DashboardDistrictsReportComponent;
  let fixture: ComponentFixture<DashboardDistrictsReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardDistrictsReportComponent],
      imports: [
        SharedModule
      ]
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

  it('should render correct number of rows with data', () => {
    component.districtData = (getCovidDistrictData() as CovidDistrictReportMetaData);
    fixture.detectChanges();
    component.ngOnChanges({
      districtData: new SimpleChange(null, component.reports, false)
    });
    fixture.detectChanges();
    const rowHtmlElements = fixture.debugElement.nativeElement.querySelectorAll('tbody>tr');
    expect(rowHtmlElements.length).toBe(Object.keys(component.districtData.districtData).length);
  });

  it('should render header with the titles', () => {
    component.districtData = (getCovidDistrictData() as CovidDistrictReportMetaData);
    fixture.detectChanges();
    component.ngOnChanges({
      districtData: new SimpleChange(null, component.districtData, false)
    });
    fixture.detectChanges();
    const rowHtmlElements = fixture.debugElement.nativeElement.querySelectorAll('.mat-header-cell');
    expect(rowHtmlElements.length).toBe(component.displayedColumns.length);
    expect(rowHtmlElements[0].textContent).toBe(' District ');
    expect(rowHtmlElements[1].textContent).toBe(' Active Cases ');
    expect(rowHtmlElements[2].textContent).toBe(' Confirmed Cases ');
    expect(rowHtmlElements[3].textContent).toBe(' Diseased Cases ');
  });

});
