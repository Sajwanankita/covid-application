import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Constants } from 'src/app/core/constants/app-constants';
import { getNews } from 'src/app/core/fixtures/news.fixture';
import { NewsService } from 'src/app/core/services/news.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListNewsComponent } from './list-news.component';


import createSpyObj = jasmine.createSpyObj;

describe('ListNewsComponent', () => {
  let component: ListNewsComponent;
  let fixture: ComponentFixture<ListNewsComponent>;
  let newsService: NewsService;
  let toastrService: ToastrService;
  const router = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async(() => {
    newsService = createSpyObj('newsService', ['fetchNews']);
    toastrService = createSpyObj('toastrService', ['warn', 'error', 'info']);
    TestBed.configureTestingModule({
      declarations: [ListNewsComponent],
      imports: [
        ToastrModule,
        SharedModule,
        RouterTestingModule,
        BrowserAnimationsModule,
        RouterTestingModule
      ],
      providers: [
        { provide: Router, useValue: router },
        { provide: NewsService, useValue: newsService },
        { provide: ToastrService, useValue: toastrService },
        {
          provide: ActivatedRoute,
          useValue: {
            parent: 'news',
            snapshot: {
              data: {
                newsData: [
                  getNews()
                ]
              }
            }
          }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call add news on the button click but navivate to login if TOKEN is empty', () => {
    localStorage.clear();
    const addNewsButton = fixture.debugElement.query(By.css('button'));
    addNewsButton.triggerEventHandler('click', {});
    expect(router.navigate).toHaveBeenCalledWith([Constants.LOGIN_ROUTE],
      { queryParams: Object({ redirectTo: '/news/add-news' }) });
    expect(toastrService.info).toHaveBeenCalledWith('Please login to add news!', Constants.COVID_INDIA_PORTAL);
  });

  it('should call add news on the button click but navivate to Add News Form if TOKEN is not empty', () => {
    localStorage.setItem('TOKEN', '');
    const addNewsButton = fixture.debugElement.query(By.css('button'));
    addNewsButton.triggerEventHandler('click', {});
    fixture.detectChanges();
    localStorage.clear();
    fixture.detectChanges();
    expect(router.navigate).toHaveBeenCalledWith([Constants.ADD_NEWS_ROUTE],
      { relativeTo: 'news' });
  });

  it('should call view full new button click and set display to true', () => {
    expect(component.display).toBeFalse();
    const viewFullNewsButton = fixture.debugElement.query(By.css('.ui-button-secondary'));
    viewFullNewsButton.triggerEventHandler('click', {});
    fixture.detectChanges();
    expect(component.display).toBeTrue();
  });

});
