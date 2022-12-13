import { Injectable } from '@angular/core';
import { IonItem } from '@ionic/angular';
import { Storage } from '@ionic/storage';

export interface Usuario{
  nomUsuario: string;
  correoUsuario: string;
  passUsuario: string;
  rolUsuario: string;
  dirUsuario: string;
  lu: string;
  ma: string;
  mi: string;
  ju: string;
  vi: string;
  sa: string;
  disponible: boolean;
}

export interface Disponible{
  nomUsuario: string;
  dirUsuario: string;
}

const USERS_KEY = 'my-usuarios';  
const DIS_KEY = 'disponibles'


@Injectable({
  providedIn: 'root'
})

export class StorageService {

  private _storage: Storage;
  usuarios : Usuario[] = [];
  disponible : Disponible[] = [];

  lunes = localStorage.getItem("lunes");
  martes = localStorage.getItem("martes");
  miercoles = localStorage.getItem("miercoles");
  jueves = localStorage.getItem("jueves");
  viernes = localStorage.getItem("viernes");
  sabado = localStorage.getItem("sabado");

  constructor(private storage: Storage,
              private disponibles: Storage) { 
    this.init();
   }

   //creamos el storage de Usuarios
    async init(){
    const storage = await this.storage.create();
    this._storage = storage;
    

  }

  //creamos un Usuario
  async addUsuario(dato: Usuario):Promise<any>{
   return this.storage.get(USERS_KEY).then((datos: Usuario[])=>{ 
     if(datos){
       datos.push(dato);    //agregamos un objeto al storage
       return this.storage.set(USERS_KEY,datos);
     }
     else{
       return this.storage.set(USERS_KEY, [dato]);
     }
   })
  }//findelmetodo

  async addDisponible(dato: Disponible):Promise<any>{
    return this.storage.get(DIS_KEY).then((datos: Disponible[])=>{ 
      if(datos){
        datos.push(dato);    //agregamos un objeto al storage
        return this.storage.set(DIS_KEY,datos);
      }
      else{
        return this.storage.set(DIS_KEY, [dato]);
      }
    })
   }//findelmetodo

  //obtener todos los objetos desde el storage 
  async getUsuarios():Promise<Usuario[]>{
    return this.storage.get(USERS_KEY);
  }

  async getDisponibles():Promise<Disponible[]>{
    return this.storage.get(DIS_KEY);
  }

  async vaciarDisponibles():Promise<Disponible[]>{

    let vacio: Disponible[] = [];
    console.log("Se vació");
    return this.storage.set(DIS_KEY, vacio);
    
  }

  dia(){
    let fecha = new Date();
    let diario = fecha.getDay();
    let nombre: string;

    switch(diario){
      case 0: 
      nombre = "domingo";
      break;

      case 1:
      nombre = "lunes";
      break;

      case 2:
      nombre = "martes";
      break;

      case 3:
      nombre = "miercoles";
      break;

      case 4:
      nombre = "jueves";
      break;
      
      case 5:
      nombre = "viernes";
      break;

      case 6:
      nombre = "sabado";
      break;
    }

    return nombre;
  }


  encontrarPasajero(){

    this.getUsuarios().then(datos=>{ 
      this.usuarios = datos; 
      
      if (!datos || datos.length==0){
        return null;
      } 
    for (let obj of this.usuarios){

      if(obj.rolUsuario == "pasajero"){
        
        if ( this.dia() == "lunes" && this.lunes == obj.lu ){
          
          this.addDisponible(obj);
          
          console.log('Encontrado');
          console.log(obj.disponible ,obj.nomUsuario, obj.dirUsuario);
        }

        if ( this.dia() == "martes" && this.martes == obj.ma ){
          
          
        }

        if ( this.dia() == "miercoles" && this.miercoles == obj.mi ){
          
        }

        if ( this.dia() == "jueves" && this.jueves == obj.ju ){
          
        }

        if ( this.dia() == "viernes" && this.viernes == obj.vi ){
          
        }

        if ( this.dia() == "sabado" && this.sabado == obj.sa ){
          
        }

      }//si es un conductor
    } // fin del for
  });
  }//metodo 

  encontrarConductor(){
 
    this.getUsuarios().then(datos=>{ 
      this.usuarios = datos; 
      
      if (!datos || datos.length==0){
        return null;
      } 
    for (let obj of this.usuarios){

      if(obj.rolUsuario == "conductor"){
        
        if ( this.dia() == "lunes" && this.lunes == obj.lu ){
          obj.disponible = true;
          
          
          console.log('Encontrado');
          console.log(obj.disponible ,obj.nomUsuario, obj.dirUsuario);
        }

        if ( this.dia() == "martes" && this.martes == obj.ma ){
          
          
        }

        if ( this.dia() == "miercoles" && this.miercoles == obj.mi ){
          
        }

        if ( this.dia() == "jueves" && this.jueves == obj.ju ){
          
        }

        if ( this.dia() == "viernes" && this.viernes == obj.vi ){
          
        }

        if ( this.dia() == "sabado" && this.sabado == obj.sa ){
          
        }

      }//si es un conductor
    } // fin del for
  });
  }//metodo 


}