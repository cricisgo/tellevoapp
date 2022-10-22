import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
 
  {
    path: 'conductor',
    loadChildren: () => import('./pages/conductor/conductor.module').then( m => m.ConductorPageModule)
  },
  {
    path: 'pasajero',
    loadChildren: () => import('./pages/pasajero/pasajero.module').then( m => m.PasajeroPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'horarioc',
    loadChildren: () => import('./pages/horarioc/horarioc.module').then( m => m.HorariocPageModule)
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
    loadChildren: () => import('./pages/perfilp/perfilp.module').then( m => m.PerfilpPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
