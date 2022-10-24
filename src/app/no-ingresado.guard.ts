import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoIngresadoGuard implements CanActivate {

  constructor(public navController: NavController){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(localStorage.getItem('ingresado')){
        if (localStorage.getItem('rol') == "conductor"){
          this.navController.navigateRoot('perfilc');
          }

          if (localStorage.getItem('rol') == "pasajero"){
            this.navController.navigateRoot('perfilp');
            }
        return false;
      }else{
        return true;
      }
  }
  
}