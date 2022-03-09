import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuardService implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    console.log(this.router.url)
    if (this.loginService.isAuthenticated()) {
      return true; //User can navigate to the requested route
    }
    else {
      this.router.navigate(["/login"])
      return false; // User cannot navigate to the request route
    }
  }
}
