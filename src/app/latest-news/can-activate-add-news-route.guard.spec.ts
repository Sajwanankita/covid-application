import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AdminLoginComponent } from '../login/admin-login/admin-login.component';
import { CanActivateRouteGuard } from './can-activate-add-news-route.guard';
import createSpyObj = jasmine.createSpyObj;
import Spy = jasmine.Spy;

describe('RouteGuardService', () => {
    let routeGuard: CanActivateRouteGuard;
    const router = {
        navigate: jasmine.createSpy('navigate')
    };
    let toastrService: ToastrService;

    beforeEach(() => {
        toastrService = createSpyObj('toastrService', ['warn', 'error', 'info']);
        TestBed.configureTestingModule({
            imports: [ToastrModule,
                RouterTestingModule.withRoutes([
                    {
                        path: 'login',
                        component: AdminLoginComponent
                    }
                ])
            ],
            declarations: [
                AdminLoginComponent
            ],
            providers: [
                { provide: Router, useValue: router },
                { provide: ToastrService, useValue: toastrService },
                CanActivateRouteGuard
            ]
        });
        routeGuard = TestBed.inject(CanActivateRouteGuard);
    });

    it('should be created', () => {
        expect(routeGuard).toBeTruthy();

    });

    it('should return false and redirect to login when user not logged in ', () => {
        localStorage.clear();
        expect(routeGuard.canActivate({} as any, {} as any)).toBe(false);
        expect(toastrService.info).toHaveBeenCalled();
        expect(router.navigate).toHaveBeenCalledWith(['login']);
    });

    it('should return true when user is logged in ', () => {
        localStorage.setItem('TOKEN', 'TOKEN');
        expect(routeGuard.canActivate({} as any, {} as any)).toBe(true);
        expect(toastrService.info).not.toHaveBeenCalled();
        expect(router.navigate).not.toHaveBeenCalledWith(['login']);
    });

});
