import { Component, OnInit } from '@angular/core';
import { MenuController} from '@ionic/angular';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.page.html',
  styleUrls: ['./conductor.page.scss'],
})
export class ConductorPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }
 
  mostrarMenu(){
    this.menuController.open('first');
  }


  Conductor = {
    nombre:'',
    email: '',
    password:'',
    escuela:'',
    carrera: '',
    telefono:'',
    capacidad: ''
  }

  onSubmit(){
    console.log('submit');
    console.log(this.Conductor);
  }

}
