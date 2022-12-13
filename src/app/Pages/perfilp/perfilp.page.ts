import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { StorageService } from '../services/storage.service'

declare var google;

interface Marker {
  position: {
    lat: number,
    lng: number,
  };
  title: string;
}

@Component({
  selector: 'app-perfilp',
  templateUrl: './perfilp.page.html',
  styleUrls: ['./perfilp.page.scss'],
})
export class PerfilpPage implements OnInit {

  nombreUsuario = localStorage.getItem('nombre');
  dirUsuario = localStorage.getItem('direccion');
  nombrePasajero = localStorage.getItem('nomPasajero');
  dirPasajero = localStorage.getItem('dirPasajero');
  
  nombre: string;
  dire: string;

  usuarios = [];
  
  lunes = localStorage.getItem("lunes");
  martes = localStorage.getItem("martes");
  miercoles = localStorage.getItem("miercoles");
  jueves = localStorage.getItem("jueves");
  viernes = localStorage.getItem("viernes");
  sabado = localStorage.getItem("sabado");

  map = null;
  markers: Marker[] = [
    {
      position: {
        lat: -33.510920746992646, 
        lng: -70.752564032674
      },
      title: 'Duoc'
    },
    {
      position: {
        lat: 4.667945861816406,
        lng: -74.09964752197266,
      },
      title: 'Mi casa'
    },
  ];

  constructor(private menuController: MenuController,
    private navController: NavController,
    private registroService: StorageService, ) { }


  ngOnInit() {
    this.loadMap();
  }

  renderMarkers() {
    this.markers.forEach(marker => {
      this.addMarker(marker);
    });
  }

  addMarker(marker: Marker) {
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title
    });
  }

  loadMap() {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
    // create LatLng object
    const myLatLng = {lat: -33.510920746992646, lng: -70.752564032674};
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 15
    });
  
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      this.renderMarkers();
      mapEle.classList.add('show-map');
    });
  }
  

  async encontrarConductor(){
    this.registroService.encontrarConductor();
    console.log('Encontrando');
  }

  async crearViaje(n: string, d: string){
    localStorage.setItem('nomPasajero', this.nombreUsuario);
    localStorage.setItem('dirPasajero', this.dirUsuario);

    localStorage.setItem('nombre', n);
    localStorage.setItem('direccion', d);
    
    console.log('Viaje creado');
  }

  async loadDisponibles(){
    this.usuarios = await this.registroService.getDisponibles();
    console.log('Cargando Usuarios');
    
  }

mostrarNombre(){
  return this.nombreUsuario;
}

cerrarSesion(){
  localStorage.removeItem('ingresado');
  this.navController.navigateRoot('login');
}



}
