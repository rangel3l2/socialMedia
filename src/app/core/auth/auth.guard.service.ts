import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';



@Injectable({
  providedIn: 'root',
})
export class authGuard {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    console.log(this.authService.isLoggedIn);
    if (this.authService.isLoggedIn != 'no') {
      console.log('entrou')
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
