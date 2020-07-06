import { Injectable, Component } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class MyGuardGuard implements CanActivate {
  enteredPassword: string;
  private password = '123456'
  constructor(private router: Router) {}  
  public setTest(value: string) {
        this.enteredPassword = value;
        console.log(this.enteredPassword);
    }
    canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this.enteredPassword === this.password ) {return true; }else{
        this.router.navigate(['']);
      }
    }
}
