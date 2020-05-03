import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Constants } from '../core/constants/app-constants';


@Injectable()
export class CanActivateRouteGuard implements CanActivate {

    constructor(private readonly router: Router, private readonly toastrService: ToastrService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (localStorage.getItem('TOKEN') == null) {
            this.toastrService.info('Please login to add news', Constants.COVID_INDIA_PORTAL);
            this.router.navigate(['login']);
        }
        return localStorage.getItem('TOKEN') != null;
    }
}