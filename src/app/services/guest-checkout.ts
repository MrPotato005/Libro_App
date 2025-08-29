import { Injectable } from '@angular/core';
import { environmet } from '../../environments.ts/environmets';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { getCartToken } from '../core/car-token';
import { Factura } from '../model/factura.model';

@Injectable({
  providedIn: 'root'
})
export class GuestCheckoutServices {
  
  private base = `${environmet.baseURL}/guest/checkout`;

constructor(private http:HttpClient) {}

checkout(): Observable<Factura>{
  const params = new HttpParams().set('token',getCartToken());
  return this.http.post<Factura>(this.base,{},{params});
}







}
