import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot):boolean => 
{
  const authService: AuthService = new AuthService(); // Instantiate or inject AuthService here
  const router: Router = new Router(); // Instantiate or inject Router here

  if(authService.isLoggedIn){
    return true;
  }
  router.navigate(['/login']);
  return false;
};
