import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MenuController, NavController, AlertController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';

declare var google;

interface Marker {
  position: {
    lat: number,
    lng: number,
  };
  title: string;
}

@Component({
  selector: 'app-perfilc',
  templateUrl: './perfilc.page.html',
  styleUrls: ['./perfilc.page.scss'],
})
export class PerfilcPage implements OnInit {

  nombreUsuario = localStorage.getItem('nombre');
  dirUsuario = localStorage.getItem('direccion');
  nombrePasajero = localStorage.getItem('nomPasajero');
  dirPasajero = localStorage.getItem('dirPasajero');
  
  nombre: string;
  dire: string;

  disponibles = [];
  
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
              private alertController: AlertController,
              private registroService: StorageService,
              ){
              } 


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
  

  async crearViaje(n: string, d: string){
    localStorage.setItem('nomPasajero', n);
    localStorage.setItem('dirPasajero', d);
    
    this.registroService.vaciarDisponibles();
    console.log('Viaje creado');
  }

  async loadDisponibles(){
    this.registroService.encontrarPasajero();
    console.log('Encontrando');

    this.disponibles = await this.registroService.getDisponibles();
    console.log('Cargando Pasajeros');
    
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

async alertError(){
  const alert = await this.alertController.create({ 
    header: '¡Error!',
    message: 'Debe completar todos los datos',
    buttons: ['Aceptar']
  })
  await alert.present();
}

onSubmit(){
  console.log('submit');
}
}
