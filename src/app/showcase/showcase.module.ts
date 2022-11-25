import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowcaseRoutingModule } from './showcase-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';

import { BeersResolver } from '../core/resolvers/beers.resolver';
import { BeerStore } from '../store/beer.store';

import { ShowcaseComponent } from './pages/showcase/showcase.component';
import { DetailComponent } from './pages/detail/detail.component';



@NgModule({
  declarations: [
    ShowcaseComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    ShowcaseRoutingModule,
    SharedModule,
    MaterialModule
  ],
  providers: [
    BeersResolver,
    BeerStore
  ]
})
export class ShowcaseModule {}
