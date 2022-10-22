import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HorariocPage } from './horarioc.page';

const routes: Routes = [
  {
    path: '',
    component: HorariocPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HorariocPageRoutingModule {}
