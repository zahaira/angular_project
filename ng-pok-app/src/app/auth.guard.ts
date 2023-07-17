
// import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
// import { Observable } from 'rxjs';
// import { AuthService } from './auth.service';

// export const authGuard: CanActivateFn = (
//   route: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot
// ): boolean | Observable<boolean> | Promise<boolean> => {
//   const authService: AuthService = new AuthService(); // Instantiate or inject AuthService here
//   const router: Router = new Router(); // Instantiate or inject Router here

//   if (authService.isLoggedIn) {
//     console.log(authService.isLoggedIn);
//     return true;git 
//   } else {
//     router.navigate(['/login']);
//     return false;
//   }
// };

import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class authGuard{
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    if (this.authService.isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}


