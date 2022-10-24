import { Component } from '@angular/core';

interface Componente{
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  constructor() {}

  componentes : Componente[] = [
    {
      
      icon: 'car-sport-outline',
      name: 'Inicio',
      redirecTo: '#'
    },
    
    
    {
      icon: 'return-down-back-outline',
      name: 'Salir',
      redirecTo: '/login'
    },     
  ]

}

