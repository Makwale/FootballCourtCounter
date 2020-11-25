import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FootballmatchPage } from './footballmatch.page';

const routes: Routes = [
  {
    path: '',
    component: FootballmatchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FootballmatchPageRoutingModule {}
