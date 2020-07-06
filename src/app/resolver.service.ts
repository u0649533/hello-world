import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Resolve} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { promise } from 'protractor';
import { FileDataService } from './file-data.service';

@Injectable(
)
export class ResolverService implements Resolve<any> {
  constructor(private router: Router , private fileDataService: FileDataService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
    return this.fileDataService.getCourses();
  }
}

