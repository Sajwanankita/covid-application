import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { User } from '../models/user';
import { LoginService } from './login.service';



import Spy = jasmine.Spy;
import createSpyObj = jasmine.createSpyObj;

describe('LoginService', () => {
    let service: LoginService;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                LoginService
            ]
        });
        service = TestBed.inject(LoginService);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });


    it('should validate user with valid credentials', () => {
        const user: User = {
            username: 'admin',
            password: 'admin'
        };
        expect(service.validateUser(user)).toBeTrue();

    });

    it('should not validate user with invalid credentials', () => {
        const user: User = {
            username: 'admin',
            password: 'invalid'
        };
        expect(service.validateUser(user)).toBeFalse();

    });

});
