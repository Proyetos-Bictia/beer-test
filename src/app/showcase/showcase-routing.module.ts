import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeersResolver } from '../core/resolvers/beers.resolver';
import { DetailComponent } from './pages/detail/detail.component';
import { ShowcaseComponent } from './pages/showcase/showcase.component';

const routes: Routes = [
  {
    path: '',
    resolve: {beer: BeersResolver},
    component: ShowcaseComponent
  },
  {
    path: ':id',
    component: DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowcaseRoutingModule { }
