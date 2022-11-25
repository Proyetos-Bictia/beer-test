import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { SearchParams } from 'src/app/interface/beer';
import { BeerStore } from 'src/app/store/beer.store';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {
  beers$ = this.beerStore.beers$;
  searchCtrl = new FormControl('', []);
  pageSize = 10;
  pageIndex = 1;

  constructor(
    private readonly beerStore: BeerStore
  ) {}

  ngOnInit(): void {
    this.searchCtrl.valueChanges.pipe(
      debounceTime(450)
    ).subscribe(() => this.beerStore.getBeerFilter(this.createParams(1)))
  }

  changePage(evento: any) {
    this.pageSize = evento.pageSize;
    this.pageIndex = evento.pageIndex + 1;
    this.beerStore.getBeerFilter(this.createParams(this.pageIndex))
  }

  private createParams(page: number): SearchParams {
    const searchValue = this.searchCtrl.value;
    const params = {
      name: '',
      page,
      per_page: this.pageSize
    }
    if(searchValue && searchValue.length !== 0) {
      const termModify = searchValue.replace(' ', '_');
      params.name = `&beer_name=${termModify}`;
    }
    return params;
  }

}
