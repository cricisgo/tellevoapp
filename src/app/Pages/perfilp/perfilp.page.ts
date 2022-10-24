import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { StorageService , Usuario } from '../services/storage.service'

@Component({
  selector: 'app-perfilp',
  templateUrl: './perfilp.page.html',
  styleUrls: ['./perfilp.page.scss'],
})
export class PerfilpPage implements OnInit {


  nombreUsuario = localStorage.getItem("nombre");

  constructor(private menuController: MenuController,
    private navController: NavController,
    private registroService: StorageService, ) { }

  usuarios : Usuario[] = [];

  perfilp = {
    conductor:''
  }

  ngOnInit() {
  }


  mostrarMenu(){
    this.menuController.open('first');

}

mostrarNombre(){
  return this.nombreUsuario;
}

cerrarSesion(){
  localStorage.removeItem('ingresado');
  this.navController.navigateRoot('login');
}

onSubmit(){
  console.log('submit');
  console.log(this.perfilp);
}

}
