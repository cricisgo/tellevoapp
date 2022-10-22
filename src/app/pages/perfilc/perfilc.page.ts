import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-perfilc',
  templateUrl: './perfilc.page.html',
  styleUrls: ['./perfilc.page.scss'],
})
export class PerfilcPage implements OnInit {

  constructor(private menuController: MenuController) { }

  perfilc = {
    pasajero:''
  }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');

}

onSubmit(){
  console.log('submit');
  console.log(this.perfilc);
}
}
