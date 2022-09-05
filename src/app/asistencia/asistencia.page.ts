import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {

  private asistencia = [ 
    {
      id: '1',
      title: 'DUOC',
      ImageURL:'https://pbs.twimg.com/profile_images/1273019238282866689/yEn2L7ny_400x400.jpg',
      Comments:[ 'ingresa tu asistencia']
    },
    {
      id: '2',
      title: 'DUOC2',
      ImageURL:'http://cdcolegiolosleonesquilpue.cl/wp-content/uploads/2019/04/duoc-uc.jpeg',
      Comments:[ 've tu asistencia']
    }


     ]

  constructor() { }

  ngOnInit() {
  }

}
