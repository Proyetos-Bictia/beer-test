import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, EMPTY, Observable, tap } from 'rxjs';

import { BeerResponse } from 'src/app/interface/beer';
import { BeerStore } from 'src/app/store/beer.store';
import { BeerService } from '../services/beer.service';

@Injectable({
  providedIn: 'root'
})
export class BeersResolver implements Resolve<BeerResponse[]> {

  constructor(
    private readonly beerService: BeerService,
    private readonly beerStore: BeerStore
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<BeerResponse[]> {
    return this.beerService.getAllBeers().pipe(
      tap((beers) =>  this.beerStore.loadBeers(beers)),
      catchError((error) => {
        console.log(`Retrieval error: ${error}`);
        return EMPTY
      })
    );
  }
}
