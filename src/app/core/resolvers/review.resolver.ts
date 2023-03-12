import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, EMPTY, Observable, of } from 'rxjs';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class ReviewResolver implements Resolve<boolean> {
  
  constructor(
    private router: Router,
    private apiService: ApiService
    ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.apiService.getOne('/api/review', route.params?.['id']).pipe(
      catchError(() => {
        this.router.navigate(['/review-list']);
        return EMPTY
      })
    )
  }
}
