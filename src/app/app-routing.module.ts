import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresadoGuard } from './ingresado.guard';
import { NoIngresadoGuard } from './no-ingresado.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [IngresadoGuard]
  },

  {
    path: 'perfilc',
    loadChildren: () => import('./pages/perfilc/perfilc.module').then( m => m.PerfilcPageModule),
    canActivate: [IngresadoGuard]
    
    
  },
  {
    path: 'perfilp',
    loadChildren: () => import('./pages/perfilp/perfilp.module').then( m => m.PerfilpPageModule),
    canActivate: [IngresadoGuard]

    
  },
  {
    path: 'feriados',
    loadChildren: () => import('./Pages/feriados/feriados.module').then( m => m.FeriadosPageModule),
    canActivate: [IngresadoGuard]
    
    
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate: [NoIngresadoGuard]
    
    
    
  },
    {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule),
    canActivate: [NoIngresadoGuard]
    
  },
  {
    path: 'viaje',
    loadChildren: () => import('./Pages/viaje/viaje.module').then( m => m.ViajePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
