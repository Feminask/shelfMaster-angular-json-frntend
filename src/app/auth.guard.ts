import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { RouteCheckService } from './adminServices/route-check.service';
import { ToastService } from './adminServices/toast.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(RouteCheckService);
  const toast = inject(ToastService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    return true;
  } else {
   toast.showWarning("Please login");
    router.navigateByUrl("/");
    return false;
  }
};
