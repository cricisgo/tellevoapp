import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-horario-c',
  templateUrl: './horario-c.page.html',
  styleUrls: ['./horario-c.page.scss'],
})
export class HorarioCPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }


  horarioc = {
    lunes:'',
    martes: '',
    miercoles:'',
    Jueves:'',
    viernes:''
  }

  onSubmit(){
    console.log('submit');
    console.log(this.horarioc);
  }
}
