import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SharedModule } from './shared/shared.module';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SharedModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });


  it('should create the app', () => {

    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });


  it('should render navigation bar with expected titles in  the app', () => {

    const matTabLinkDebugElement = fixture.debugElement.queryAll
      (By.css('mat-tab-link'));

    matTabLinkDebugElement.forEach((matTabLink, index) => {
      expect(matTabLink.nativeElement.textContent).toBe(component.getLinks()[index]);
    });

  });

  it('should render header element', () => {
    expect(fixture.debugElement.query(By.directive(HeaderComponent))).toBeDefined();
  });
});


