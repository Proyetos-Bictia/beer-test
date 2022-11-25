import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { Observable, switchMap, tap } from "rxjs";
import { BeerService } from "../core/services/beer.service";

import { BeerResponse, SearchParams } from "../interface/beer";

export interface BeerState {
  beers: BeerResponse[]
}

const initialState: BeerState = {
  beers: []
}

@Injectable()
export class BeerStore extends ComponentStore<BeerState> {

  constructor(
    private readonly beerService: BeerService
  ) {
    super(initialState)
  }

  //selectors
  readonly beers$ = this.select(
    ({beers}) => beers
  )

  //Mutations
  readonly loadBeers = this.updater(
    (state, beers: BeerResponse[] = []) => ({
      ...state,
      beers
    })
  )

  //Effects
  readonly getBeerFilter = this.effect((searchTerms$: Observable<SearchParams>) => searchTerms$.pipe(
    switchMap((searchTerms) => this.beerService.getAllBeers(searchTerms.name, searchTerms.page, searchTerms.per_page)),
    tap({
      next: (beers) => this.loadBeers(beers),
      error: (e) => console.log('error ===>', e)
    })
  ))
}