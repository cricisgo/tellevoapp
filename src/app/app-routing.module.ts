import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./pages/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./pages/action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./pages/card/card.module').then( m => m.CardPageModule)
  },
  {
    path: 'inputs',
    loadChildren: () => import('./pages/inputs/inputs.module').then( m => m.InputsPageModule)
  },
  {
    path: 'pasajero',
    loadChildren: () => import('./pages/pasajero/pasajero.module').then( m => m.PasajeroPageModule)
  },
  {
    path: 'horario-c',
    loadChildren: () => import('./pages/horario-c/horario-c.module').then( m => m.HorarioCPageModule)
  },
  {
    path: 'horario-p',
    loadChildren: () => import('./pages/horario-p/horario-p.module').then( m => m.HorarioPPageModule)
  },
  {
    path: 'perfilc',
    loadChildren: () => import('./pages/perfilc/perfilc.module').then( m => m.PerfilcPageModule)
  },
  {
    path: 'perfilp',
    loadChildren: () => import('./perfilp/perfilp.module').then( m => m.PerfilpPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
