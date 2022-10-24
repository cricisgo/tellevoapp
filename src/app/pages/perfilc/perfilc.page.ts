import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-perfilc',
  templateUrl: './perfilc.page.html',
  styleUrls: ['./perfilc.page.scss'],
})
export class PerfilcPage implements OnInit {

  nombreUsuario = localStorage.getItem("nombre");

  constructor(private menuController: MenuController,
              private navController: NavController) { }

  perfilc = {
    pasajero:''
  }

  ngOnInit() {
    
  }

  mostrarNombre(){
    return this.nombreUsuario;
  }

  cerrarSesion(){
    localStorage.removeItem('ingresado');
    this.navController.navigateRoot('login');
  }

  mostrarMenu(){
    this.menuController.open('first');

}

onSubmit(){
  console.log('submit');
  console.log(this.perfilc);
}
}
