import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { take, tap, map } from 'rxjs/operators';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  publicRouter: Array<string> = ['/', '/login', '/home', '/brand-detail'];
  nextUrl: string;
  constructor(
    private auth: AuthService,
    private router: Router
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    this.nextUrl = state.url;
    if (this.nextUrl) {
      this.nextUrl = this.nextUrl.split('?')[0];
    }
    return this.auth.user.pipe(
      take(1),
      map(auth => {
        if (auth) {
          if (this.publicRouter.indexOf(this.nextUrl) > -1) {
            this.router.navigate(['/users']);
            return false;
          }
          return true;
        } else {
          if (this.publicRouter.indexOf(this.nextUrl) === -1) {
            this.router.navigate(['/login']);
            return false;
          }
          return true;
        }
      }));
  }
}
/*import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth.user.pipe(
      take(1),
      map(user => !!user),
      tap(loggedIn => {
        //console.log(loggedIn)
        if (loggedIn) {
          console.log('access denied');          
          this.router.navigate(['/home']);
        }else{
          this.router.navigate(['/login']);
        }
      })
    );
  }
}
*/