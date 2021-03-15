import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cardetail } from '../models/cardetail';
import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CardetailService {
   apiUrl='https://localhost:44362/api/cars/getcardetails'
  constructor(private httpClient: HttpClient) { }

  getCarDetails(): Observable<ListResponseModel<Cardetail>>{
    return this.httpClient.get<ListResponseModel<Cardetail>>(this.apiUrl)
  }
}