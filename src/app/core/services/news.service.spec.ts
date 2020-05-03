import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { getNews } from '../fixtures/news.fixture';
import { News } from '../models/news';
import { NewsService } from './news.service';


describe('NewsService', () => {
    let service: NewsService;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                NewsService
            ]
        });
        service = TestBed.inject(NewsService);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('Add News', () => {
        it('should perform requests to "/api/news', () => {
            const news: News = getNews();
            service.addNews(news).subscribe((res: News) => {
                expect(res).toBeDefined();
            });
            const testRequest = httpTestingController.expectOne(
                `api/news`);
            expect(testRequest.request.url)
                .toEqual(`api/news`);
            expect(testRequest.request.method).toBe('POST');
        });
    });

    describe('Get News', () => {
        it('should perform requests to "/api/news', () => {

            service.fetchNews().subscribe((res: News[]) => {
                expect(res).toBeDefined();
            });
            const testRequest = httpTestingController.expectOne(
                `api/news`);
            expect(testRequest.request.url)
                .toEqual(`api/news`);
            expect(testRequest.request.method).toBe('GET');
        });
    });

});
