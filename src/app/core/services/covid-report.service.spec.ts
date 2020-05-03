import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CovidDistrictReport } from '../models/covid-district-report';
import { CovidStateReport } from '../models/covid-state-report';
import { CovidDataService } from './covid-report.service';

const stateDataUrl = `https://api.covid19india.org/data.json`;
const districtDataUrl = `https://api.covid19india.org/state_district_wise.json`;

describe('CovidDataService', () => {
  let service: CovidDataService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        CovidDataService
      ]
    });
    service = TestBed.inject(CovidDataService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Fetch Covid Reports State Data', () => {
    it('should perform requests to "https://api.covid19india.org/data.json', () => {
      service.getCovidStateReport().subscribe((res: CovidStateReport) => {
        expect(res).toBeDefined();
      });
      const testRequest = httpTestingController.expectOne(stateDataUrl
      );
      expect(testRequest.request.url)
        .toEqual(stateDataUrl);
      expect(testRequest.request.method).toBe('GET');
    });

  });

  describe('Fetch Covid Reports District Data', () => {
    it('should perform requests to "https://api.covid19india.org/state_district_wise.json', () => {
      service.getCovidDistrictReport().subscribe((res: CovidDistrictReport) => {
        expect(res).toBeDefined();
      });
      const testRequest = httpTestingController.expectOne(
        districtDataUrl);
      expect(testRequest.request.url)
        .toEqual(districtDataUrl);
      expect(testRequest.request.method).toBe('GET');
    });
  });


});
