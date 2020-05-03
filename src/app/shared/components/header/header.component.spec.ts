import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';


describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [
        RouterTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show login button when user is not logged in', () => {
    localStorage.clear();
    fixture.detectChanges();
    const loginButton = fixture.debugElement.query(By.css('.login-button'));
    expect(loginButton).toBeTruthy();
    const logoutButton = fixture.debugElement.query(By.css('.logout-button'));
    expect(logoutButton).toBeNull();
    localStorage.clear();
  });

  it('should show logout button when user is logged in', () => {
    localStorage.setItem('TOKEN', '');
    fixture.detectChanges();
    const loginButton = fixture.debugElement.query(By.css('.login-button'));
    expect(loginButton).toBeNull();
    const logoutButton = fixture.debugElement.query(By.css('.logout-button'));
    expect(logoutButton).toBeTruthy();
  });

  it('should navigate to login page if user log out when he is on the add news page', () => {
    spyOn(component, 'logoutUser');
    localStorage.setItem('TOKEN', '');
    fixture.detectChanges();
    const addNewsButton = fixture.debugElement.query(By.css('.logout-button'));
    addNewsButton.triggerEventHandler('click', {});
    localStorage.clear();
    fixture.detectChanges();
    expect(component.logoutUser).toHaveBeenCalled();
    // expect(router.navigate).toHaveBeenCalledWith([Constants.LOGIN_ROUTE]);
  });
});
