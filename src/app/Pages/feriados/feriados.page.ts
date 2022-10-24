import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { FeriadosService , Feriado } from '../services/feriados.service';

@Component({
  selector: 'app-feriados',
  templateUrl: './feriados.page.html',
  styleUrls: ['./feriados.page.scss'],
})
export class FeriadosPage implements OnInit {

  feriados: Feriado[] = [];

  constructor(
    private feriadosService: FeriadosService) { }

    ngOnInit() {
      this.feriadosService.getDiasFeriados().subscribe(resp => {
        console.log('feriados', resp);
        this.feriados.push(...resp.data);
      })
    }


}
