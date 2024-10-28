import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreApiService {
  protected url = "https://fakestoreapi.com/products"
  constructor(private http:HttpClient) { }

  getWithHeaders():Observable<any>{
    return this.http.get<any>(this.url);
  }
}
