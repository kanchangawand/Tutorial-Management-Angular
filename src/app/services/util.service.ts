import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class UtilService {

  constructor(private http:HttpClient ) {
    

  }
  get(url):Observable<any>{
    return this.http.get(url,{headers:new HttpHeaders({
      'Content-Type':  'application/json',
    }),observe:'response'});
  }
  post(url,body):Observable<any>{
    return this.http.post(url,body,{headers:new HttpHeaders({
      'Content-Type':  'application/json',
    }),observe:'response'})
  }
  

  put(url,body):Observable<any>{
    return this.http.put(url,body,{headers:new HttpHeaders({
      'Content-Type':  'application/json',
    }),observe:'response'})
  }
  delete(url):Observable<any>{
    return this.http.delete(url,{headers:new HttpHeaders({
      'Content-Type':  'application/json',
    }),observe:'response'})
  }
}
