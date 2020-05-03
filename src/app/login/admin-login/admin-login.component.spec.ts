import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { ListNewsComponent } from 'src/app/latest-news/components/list-news/list-news.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminLoginComponent } from './admin-login.component';

describe('AdminLoginComponent', () => {
    let component: AdminLoginComponent;
    let fixture: ComponentFixture<AdminLoginComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AdminLoginComponent],
            imports: [
                SharedModule,
                ReactiveFormsModule,
                RouterTestingModule.withRoutes([
                    {
                        path: 'news',
                        component: ListNewsComponent
                    }
                ]),
                FormsModule,
                BrowserAnimationsModule
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AdminLoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should call login method when all the data is validated', () => {

        spyOn(component, 'login').and.callThrough();
        component.loginForm.controls.username.setValue('username');
        component.loginForm.controls.password.setValue('password');
        const submitButton = fixture.debugElement.query(By.css('form'));

        fixture.detectChanges();

        expect(component.loginForm.valid).toBeTruthy();
        submitButton.triggerEventHandler('ngSubmit', {});
        expect(component.login).toHaveBeenCalled();
        expect(fixture.debugElement.nativeElement.querySelector('.submit-button').disabled).toBeFalsy();

    });

    it('should show button disabled when all the form data is invalid ', () => {

        fixture.detectChanges();

        component.loginForm.controls.username.setValue('username');
        component.loginForm.controls.password.setValue('');

        fixture.detectChanges();
        expect(component.loginForm.valid).toBeFalsy();
        expect(fixture.debugElement.nativeElement.querySelector('.submit-button').disabled).toBeTruthy();
    });

    it('should show button disabled when all the form data is invalid ', () => {

        fixture.detectChanges();

        const username = component.loginForm.controls.username;
        const password = component.loginForm.controls.password;

        username.setValue('');
        password.setValue('');

        fixture.detectChanges();

        expect(component.loginForm.valid).toBeFalsy();
        expect(username.hasError('required')).toBeTruthy();
        expect(password.hasError('required')).toBeTruthy();

        expect(fixture.debugElement.nativeElement.querySelector('.submit-button').disabled).toBeTruthy();

    });
});
