import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Respuesta{
  status: string;
  data: Feriado[];
}
  
  export interface Feriado{
    title: string;
    extra: string;
    date: string;
    inalienable: number;
    type: string;
  }


@Injectable({
  providedIn: 'root'
})
export class FeriadosService {

  constructor(private httpclient: HttpClient) { }

  getDiasFeriados(){
    return (this.httpclient.get<Respuesta>
      ('https://api.victorsanmartin.com/feriados/en.json'));
  }
}
