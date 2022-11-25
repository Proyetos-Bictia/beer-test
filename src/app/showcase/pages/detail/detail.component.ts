import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, EMPTY, Observable } from 'rxjs';
import { BeerService } from 'src/app/core/services/beer.service';
import { BeerResponse } from 'src/app/interface/beer';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  beer$!: Observable<BeerResponse>

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly beerService: BeerService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.beer$ = this.beerService.getBeerById(id).pipe(
      catchError(() => {
        this.router.navigate(['home'])
        return EMPTY
      })
    )
  }

}
