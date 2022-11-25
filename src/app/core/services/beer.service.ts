import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { BeerResponse } from 'src/app/interface/beer';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BeerService {
  private baseUrl = environment.baseUrl

  constructor(
    private readonly http: HttpClient
  ) {}

  getAllBeers(params = '', page: number = 1, per_page: number = 10): Observable<BeerResponse[]> {
    const url = `${this.baseUrl}/beers?page=${page}&per_page=${per_page}${params}`;
    return this.http.get<BeerResponse[]>(url);
  }

  getBeerById(id: string): Observable<BeerResponse> {
    const url = `${this.baseUrl}/beers/${id}`;
    return this.http.get<BeerResponse[]>(url).pipe(
      map(beer => beer[0])
    );
  }
}
