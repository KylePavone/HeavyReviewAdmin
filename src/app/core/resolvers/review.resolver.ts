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
  public data: any = {}
  
  constructor(
    private router: Router,
    private apiService: ApiService
    ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    this.data.id = route.params?.['id']  
    return this.apiService.get('/api/review', this.data).pipe(
      catchError(() => {
        this.router.navigate(['/review-list']);
        return EMPTY
      })
    )
  }
}
