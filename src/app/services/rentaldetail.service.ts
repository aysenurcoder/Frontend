import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';
import { Rentaldetail } from '../models/rentaldetail';


@Injectable({
  providedIn: 'root'
})
export class RentaldetailService {
  apiUrl='https://localhost:44362/api/rentals/getrentaldetails'
  constructor(private httpClient: HttpClient) { }

  getRentalDetails(): Observable<ListResponseModel<Rentaldetail>>{
    return this.httpClient.get<ListResponseModel<Rentaldetail>>(this.apiUrl)
  }
}
