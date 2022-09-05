import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HorarioPPage } from './horario-p.page';

const routes: Routes = [
  {
    path: '',
    component: HorarioPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HorarioPPageRoutingModule {}
