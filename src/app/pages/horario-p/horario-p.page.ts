import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-horario-p',
  templateUrl: './horario-p.page.html',
  styleUrls: ['./horario-p.page.scss'],
})
export class HorarioPPage implements OnInit {


  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }


  horariop = {
    lunes:'',
    martes: '',
    miercoles:'',
    Jueves:'',
    viernes:''
  }

  onSubmit(){
    console.log('submit');
    console.log(this.horariop);
  }
}

