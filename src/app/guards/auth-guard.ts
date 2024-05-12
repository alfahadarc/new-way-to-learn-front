import { Injectable, inject } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivateFn,
} from '@angular/router';

import { AuthService } from '../services/auth/auth.service';

export const canActivateGuard: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) => {
    if (inject(AuthService).isLoggedIn) {
      return true;
    } else {
      inject(Router).navigate(['/login']); // Use inject(Router) to get the Router service
      return false;
    }
  };