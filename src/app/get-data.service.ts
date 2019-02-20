import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  URLLink="/api";
  
   headers:any;
  constructor( private http: Http,) { }

  getHTTPData (): Observable<any> {
   
    return this.http.get(this.URLLink);
  }

 

}
