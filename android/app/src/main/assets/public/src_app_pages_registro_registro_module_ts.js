"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_registro_registro_module_ts"],{

/***/ 6138:
/*!***********************************************************!*\
  !*** ./src/app/pages/registro/registro-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroPageRoutingModule": () => (/* binding */ RegistroPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro.page */ 1044);




const routes = [
    {
        path: '',
        component: _registro_page__WEBPACK_IMPORTED_MODULE_0__.RegistroPage
    }
];
let RegistroPageRoutingModule = class RegistroPageRoutingModule {
};
RegistroPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegistroPageRoutingModule);



/***/ }),

/***/ 8712:
/*!***************************************************!*\
  !*** ./src/app/pages/registro/registro.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroPageModule": () => (/* binding */ RegistroPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _registro_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro-routing.module */ 6138);
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro.page */ 1044);







let RegistroPageModule = class RegistroPageModule {
};
RegistroPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _registro_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistroPageRoutingModule
        ],
        declarations: [_registro_page__WEBPACK_IMPORTED_MODULE_1__.RegistroPage]
    })
], RegistroPageModule);



/***/ }),

/***/ 1044:
/*!*************************************************!*\
  !*** ./src/app/pages/registro/registro.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroPage": () => (/* binding */ RegistroPage)
/* harmony export */ });
/* harmony import */ var C_Users_Cristian_Desktop_tellevoapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _registro_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro.page.html?ngResource */ 4144);
/* harmony import */ var _registro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registro.page.scss?ngResource */ 2079);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/storage.service */ 1422);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);








let RegistroPage = class RegistroPage {
  constructor(alertController, registroService, navController, toast, fb) {
    this.alertController = alertController;
    this.registroService = registroService;
    this.navController = navController;
    this.toast = toast;
    this.fb = fb;
    this.newUsuario = {};
    this.usuarios = [];
    this.formularioRegistro = this.fb.group({
      'nombre': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
      'correo': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]),
      'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')])),
      'direccion': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
      'rol': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
      'lunes': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
      'martes': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
      'miercoles': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
      'jueves': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
      'viernes': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
      'sabado': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required)
    });
  }

  ngOnInit() {}

  CrearUsuario() {
    var _this = this;

    return (0,C_Users_Cristian_Desktop_tellevoapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var form = _this.formularioRegistro.value;
      var repetido = 0;

      if (_this.formularioRegistro.invalid) {
        _this.alertError();
      } else {
        _this.newUsuario.nomUsuario = form.nombre;
        _this.newUsuario.correoUsuario = form.correo;
        _this.newUsuario.passUsuario = form.password;
        _this.newUsuario.rolUsuario = form.rol;
        _this.newUsuario.dirUsuario = form.direccion;
        _this.newUsuario.lu = form.lunes;
        _this.newUsuario.ma = form.martes;
        _this.newUsuario.mi = form.miercoles;
        _this.newUsuario.ju = form.jueves;
        _this.newUsuario.vi = form.viernes;
        _this.newUsuario.sa = form.sabado;

        _this.registroService.getUsuarios().then(datos => {
          _this.usuarios = datos;

          if (!datos || datos.length == 0) {
            _this.registroService.addUsuario(_this.newUsuario).then(dato => {
              _this.newUsuario = {};

              _this.showToast('Usuario Creado satisfactoriamente');
            });

            _this.formularioRegistro.reset();

            _this.navController.navigateRoot('login');
          } else {
            for (let obj of _this.usuarios) {
              if (_this.newUsuario.correoUsuario == obj.correoUsuario) {
                repetido = 1;
              }
            } //Fin del for


            if (repetido == 1) {
              _this.alertCorreoExistente();

              _this.formularioRegistro.reset();
            } else {
              _this.registroService.addUsuario(_this.newUsuario).then(dato => {
                _this.newUsuario = {};

                _this.showToast('Usuario Creado satisfactoriamente');
              });

              _this.formularioRegistro.reset();

              _this.navController.navigateRoot('login');
            }
          }
        });
      } //finelse

    })();
  } //findelmetodo


  alertError() {
    var _this2 = this;

    return (0,C_Users_Cristian_Desktop_tellevoapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alertController.create({
        header: '¡Error!',
        message: 'Debe completar todos los datos',
        buttons: ['Aceptar']
      });
      yield alert.present();
    })();
  }

  alertCorreoExistente() {
    var _this3 = this;

    return (0,C_Users_Cristian_Desktop_tellevoapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this3.alertController.create({
        header: '¡Error!',
        message: 'El correo ingresado ya fue registrado.',
        buttons: ['Aceptar']
      });
      yield alert.present();
    })();
  }

  alertPass() {
    var _this4 = this;

    return (0,C_Users_Cristian_Desktop_tellevoapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this4.alertController.create({
        header: '¡Error!',
        message: 'Las contraseñas deben coincidir',
        buttons: ['Aceptar']
      });
      yield alert.present();
    })();
  }

  showToast(msg) {
    var _this5 = this;

    return (0,C_Users_Cristian_Desktop_tellevoapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this5.toast.create({
        message: msg,
        duration: 2000
      });
      yield toast.present();
    })();
  }

};

RegistroPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController
}, {
  type: _services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
}];

RegistroPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-registro',
  template: _registro_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_registro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], RegistroPage);


/***/ }),

/***/ 2079:
/*!**************************************************************!*\
  !*** ./src/app/pages/registro/registro.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Ryby5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 4144:
/*!**************************************************************!*\
  !*** ./src/app/pages/registro/registro.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-buttons slot=\"start\">\n    <ion-back-button defaultHref=\"/\"></ion-back-button>\n  </ion-buttons>\n  <ion-toolbar color=\"light\">\n    <ion-title><center>Registro</center></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card color=\"light\">\n    <ion-card-header>\n      <ion-card-title >Crea una cuenta</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n       <form [formGroup]=\"formularioRegistro\" (keyup.enter)=\"CrearUsuario()\">\n\n        <ion-item color=\"light\">\n          <ion-label position=\"floating\">Nombre</ion-label>\n          <ion-input type=\"text\" placeholder=\"Pepito Perez\" formControlName=\"nombre\"></ion-input>\n        </ion-item>\n\n        <ion-item color=\"light\">\n          <ion-label position=\"floating\">Correo</ion-label>\n          <ion-input type=\"email\" placeholder=\"tucorreo@duocuc.cl\" formControlName=\"correo\"></ion-input>\n        </ion-item>\n\n        <ion-item color=\"light\">\n          <ion-label position=\"floating\">Direccion</ion-label>\n          <ion-input type=\"text\" placeholder=\"Avenida Pajaritos 123\" formControlName=\"direccion\"></ion-input>\n        </ion-item>\n\n        <ion-item color=\"light\">\n          <ion-label position=\"floating\">Contraseña</ion-label>\n          <ion-input type=\"password\"  formControlName=\"password\"></ion-input>\n          <ion-note slot=\"error\">Mínimo 6 caracteres (Debe contener una mayúscula, una minúsucula y un número)</ion-note>\n        </ion-item>\n\n        \n        <ion-item color=\"light\">\n          <ion-label position=\"floating\">¿Cómo vas a viajar?</ion-label>\n          <ion-select interface=\"action-sheet\" placeholder=\"Escoje tu rol\" formControlName=\"rol\">\n            <ion-select-option value=\"conductor\">Conductor</ion-select-option>\n            <ion-select-option value=\"pasajero\">Pasajero</ion-select-option>\n          </ion-select>\n        </ion-item>\n        \n\n        <ion-card-header>\n          <ion-card-title >Rellena tu horario:</ion-card-title>\n        </ion-card-header>\n\n        <ion-item color=\"light\">\n          <ion-label position=\"floating\">Lunes:</ion-label>\n          <ion-select interface=\"action-sheet\" formControlName=\"lunes\">\n            <ion-select-option value=\"2020\">20:20</ion-select-option>\n            <ion-select-option value=\"2100\">21:00</ion-select-option>\n            <ion-select-option value=\"2140\">21:40</ion-select-option>\n            <ion-select-option value=\"2220\">22:20</ion-select-option>\n            <ion-select-option value=\"2300\">23:00</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item color=\"light\">\n          <ion-label position=\"floating\">Martes:</ion-label>\n          <ion-select interface=\"action-sheet\" formControlName=\"martes\">\n            <ion-select-option value=\"2020\">20:20</ion-select-option>\n            <ion-select-option value=\"2100\">21:00</ion-select-option>\n            <ion-select-option value=\"2140\">21:40</ion-select-option>\n            <ion-select-option value=\"2220\">22:20</ion-select-option>\n            <ion-select-option value=\"2300\">23:00</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item color=\"light\">\n          <ion-label position=\"floating\">Miercoles:</ion-label>\n          <ion-select interface=\"action-sheet\" formControlName=\"miercoles\">\n            <ion-select-option value=\"2020\">20:20</ion-select-option>\n            <ion-select-option value=\"2100\">21:00</ion-select-option>\n            <ion-select-option value=\"2140\">21:40</ion-select-option>\n            <ion-select-option value=\"2220\">22:20</ion-select-option>\n            <ion-select-option value=\"2300\">23:00</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item color=\"light\">\n          <ion-label position=\"floating\">Jueves:</ion-label>\n          <ion-select interface=\"action-sheet\" formControlName=\"jueves\">\n            <ion-select-option value=\"2020\">20:20</ion-select-option>\n            <ion-select-option value=\"2100\">21:00</ion-select-option>\n            <ion-select-option value=\"2140\">21:40</ion-select-option>\n            <ion-select-option value=\"2220\">22:20</ion-select-option>\n            <ion-select-option value=\"2300\">23:00</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item color=\"light\">\n          <ion-label position=\"floating\">Viernes:</ion-label>\n          <ion-select interface=\"action-sheet\" formControlName=\"viernes\">\n            <ion-select-option value=\"2020\">20:20</ion-select-option>\n            <ion-select-option value=\"2100\">21:00</ion-select-option>\n            <ion-select-option value=\"2140\">21:40</ion-select-option>\n            <ion-select-option value=\"2220\">22:20</ion-select-option>\n            <ion-select-option value=\"2300\">23:00</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item color=\"light\">\n          <ion-label position=\"floating\">Sabado:</ion-label>\n          <ion-select interface=\"action-sheet\" formControlName=\"sabado\">\n            <ion-select-option value=\"1000\">10:00</ion-select-option>\n            <ion-select-option value=\"1040\">10:40</ion-select-option>\n            <ion-select-option value=\"1120\">11:20</ion-select-option>\n            <ion-select-option value=\"1200\">12:00</ion-select-option>\n            <ion-select-option value=\"1240\">12:40</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n       </form>\n       <br>\n       <ion-button (click)=\"CrearUsuario()\" color=\"success\" expand=\"block\" fill=\"solid\" shape=\"round\">\n         Registrarse\n       </ion-button>\n       \n\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color=\"light\">\n    <ion-buttons slot=\"end\">\n      <ion-button [routerLink] = \"['/login']\">\n        Login\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_registro_registro_module_ts.js.map