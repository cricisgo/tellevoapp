import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-horarioc',
  templateUrl: './horarioc.page.html',
  styleUrls: ['./horarioc.page.scss'],
})
export class HorariocPage implements OnInit {

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
  

