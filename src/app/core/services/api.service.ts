import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public domainUrl = 'http://localhost:8000'

  constructor(private http: HttpClient) { }

  getOne(url: string, id: any) {
    return new Observable<any>((observer) => {
      this.http.get(this.domainUrl + url + '/'+ id).subscribe((data) => {
        observer.next(data);
        observer.complete()
      },
      (error) => {
        console.log(error.status);
      })
    })
  }

  get(url: string) {
    return new Observable<any>((observer) => {
      this.http.get(this.domainUrl + url).subscribe((data) => {
        observer.next(data);
        observer.complete()
      },
      (error) => {
        console.log(error.status);
      })
    })
  }

  post(url: string, data: any = {}) {
    return new Observable<any>((observer) => {
      this.http.post(this.domainUrl + url, data).subscribe((data: any) => {
        observer.next(data);
        observer.complete()
      },
      (error) => {
        console.log(error.status);
      })
    })
  }
}
