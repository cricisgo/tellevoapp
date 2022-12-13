import { Component, OnInit } from '@angular/core';
import { StorageService , Usuario } from '../services/storage.service'
import { NavController, ToastController, AlertController } from '@ionic/angular';
import {
  FormGroup, FormControl, Validators, FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup; 
  newUsuario: Usuario = <Usuario>{};
  usuarios : Usuario[] = [];


  constructor(private alertController: AlertController,
              private registroService: StorageService,
              private navController: NavController,
              private toast: ToastController, 
              private fb:FormBuilder) {
                this.formularioRegistro = this.fb.group({
                  'nombre' : new FormControl("", Validators.required), 
                  'correo' : new FormControl("", [Validators.required, Validators.email]), 
                  'password': new FormControl("", Validators.compose([
                    Validators.required,
                    Validators.minLength(6),
                    Validators.maxLength(20),
                    Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
                  ])), 
                  'direccion': new FormControl("", Validators.required),
                  'rol': new FormControl("", Validators.required),
                  'lunes': new FormControl("", Validators.required),
                  'martes': new FormControl("", Validators.required),
                  'miercoles': new FormControl("", Validators.required),
                  'jueves': new FormControl("", Validators.required),
                  'viernes': new FormControl("", Validators.required),
                  'sabado': new FormControl("", Validators.required),
                })
               }

  ngOnInit() {
  }

  async CrearUsuario(){
    var form = this.formularioRegistro.value;
    var repetido = 0;

    if (this.formularioRegistro.invalid){
      this.alertError();
    }

    else{
    this.newUsuario.nomUsuario = form.nombre;
    this.newUsuario.correoUsuario = form.correo;
    this.newUsuario.passUsuario = form.password;
    this.newUsuario.rolUsuario = form.rol;
    this.newUsuario.dirUsuario = form.direccion;
    this.newUsuario.disponible = false;
    this.newUsuario.lu = form.lunes;
    this.newUsuario.ma = form.martes;
    this.newUsuario.mi = form.miercoles;
    this.newUsuario.ju = form.jueves;
    this.newUsuario.vi = form.viernes;
    this.newUsuario.sa = form.sabado;

    this.registroService.getUsuarios().then(datos=>{ 
    this.usuarios = datos; 

    if (!datos || datos.length==0){
      this.registroService.addUsuario(this.newUsuario).then(dato=>{ 
        this.newUsuario=<Usuario>{};
        this.showToast('Usuario Creado satisfactoriamente');
      });
      this.formularioRegistro.reset();
      this.navController.navigateRoot('login');
    }else{
    
    for (let obj of this.usuarios){
      if (this.newUsuario.correoUsuario == obj.correoUsuario){
        repetido = 1;
      }
    }//Fin del for
  
      if (repetido == 1){
        this.alertCorreoExistente();
        this.formularioRegistro.reset();
      }
      else{
        
        this.registroService.addUsuario(this.newUsuario).then(dato=>{ 
          this.newUsuario=<Usuario>{};
          this.showToast('Usuario Creado satisfactoriamente');
        });

        this.formularioRegistro.reset();
        this.navController.navigateRoot('login');

      }
    }
    })  
  
  }//finelse

  }//findelmetodo

  async alertError(){
    const alert = await this.alertController.create({ 
      header: '¡Error!',
      message: 'Debe completar todos los datos',
      buttons: ['Aceptar']
    })
    await alert.present();
  }

  async alertCorreoExistente(){
    const alert = await this.alertController.create({ 
      header: '¡Error!',
      message: 'El correo ingresado ya fue registrado.',
      buttons: ['Aceptar']
    })
    await alert.present();
  }


  async alertPass(){
    const alert = await this.alertController.create({ 
      header: '¡Error!',
      message: 'Las contraseñas deben coincidir',
      buttons: ['Aceptar']
    })
    await alert.present();
  }

  async showToast(msg){
    const toast = await this.toast.create({
      message: msg,
      duration: 2000
    })
    await toast.present();
  }


}