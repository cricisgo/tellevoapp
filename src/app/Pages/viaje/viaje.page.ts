import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.page.html',
  styleUrls: ['./viaje.page.scss'],
})
export class ViajePage implements OnInit {

  nombreUsuario = localStorage.getItem('nombre');
  dirUsuario = localStorage.getItem('direccion');
  nombrePasajero = localStorage.getItem('nomPasajero');
  dirPasajero = localStorage.getItem('dirPasajero');

  constructor() { }

  ngOnInit() {
  }
  mostrarNombre(){
    return this.nombreUsuario;
  }
  
  mostrarDire(){
    return this.dirUsuario;
  }

  mostrarNombrePas(){
    return this.nombrePasajero;
  }

  mostrarDirePas(){
    return this.dirPasajero;
  }

}
