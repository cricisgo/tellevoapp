import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-perfilp',
  templateUrl: './perfilp.page.html',
  styleUrls: ['./perfilp.page.scss'],
})
export class PerfilpPage implements OnInit {

  constructor(private menuController: MenuController) { }

  perfilp = {
    conductor:''
  }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');

}

onSubmit(){
  console.log('submit');
  console.log(this.perfilp);
}

}
