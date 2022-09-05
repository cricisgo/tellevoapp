import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.page.html',
  styleUrls: ['./pasajero.page.scss'],
})
export class PasajeroPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }


  usuario = {
    nombre:'',
    email: '',
    password:'',
    escuela:'',
    carrera: '',
    telefono:'',
    direccion: ''
  }

  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }

}
