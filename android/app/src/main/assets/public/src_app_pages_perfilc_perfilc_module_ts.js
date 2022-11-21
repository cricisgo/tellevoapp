"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_perfilc_perfilc_module_ts"],{

/***/ 7410:
/*!*********************************************************!*\
  !*** ./src/app/pages/perfilc/perfilc-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilcPageRoutingModule": () => (/* binding */ PerfilcPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _perfilc_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perfilc.page */ 2671);




const routes = [
    {
        path: '',
        component: _perfilc_page__WEBPACK_IMPORTED_MODULE_0__.PerfilcPage
    }
];
let PerfilcPageRoutingModule = class PerfilcPageRoutingModule {
};
PerfilcPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PerfilcPageRoutingModule);



/***/ }),

/***/ 6235:
/*!*************************************************!*\
  !*** ./src/app/pages/perfilc/perfilc.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilcPageModule": () => (/* binding */ PerfilcPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _perfilc_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perfilc-routing.module */ 7410);
/* harmony import */ var _perfilc_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./perfilc.page */ 2671);







let PerfilcPageModule = class PerfilcPageModule {
};
PerfilcPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _perfilc_routing_module__WEBPACK_IMPORTED_MODULE_0__.PerfilcPageRoutingModule
        ],
        declarations: [_perfilc_page__WEBPACK_IMPORTED_MODULE_1__.PerfilcPage]
    })
], PerfilcPageModule);



/***/ }),

/***/ 2671:
/*!***********************************************!*\
  !*** ./src/app/pages/perfilc/perfilc.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilcPage": () => (/* binding */ PerfilcPage)
/* harmony export */ });
/* harmony import */ var C_Users_Cristian_Desktop_tellevoapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _perfilc_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./perfilc.page.html?ngResource */ 5517);
/* harmony import */ var _perfilc_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./perfilc.page.scss?ngResource */ 1115);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/storage.service */ 1422);







let PerfilcPage = class PerfilcPage {
  constructor(menuController, navController, alertController, registroService) {
    this.menuController = menuController;
    this.navController = navController;
    this.alertController = alertController;
    this.registroService = registroService;
    this.nombreUsuario = localStorage.getItem('nombre');
    this.dirUsuario = localStorage.getItem('direccion');
    this.nombrePasajero = localStorage.getItem('nomPasajero');
    this.dirPasajero = localStorage.getItem('dirPasajero');
    this.usuarios = [];
    this.lunes = localStorage.getItem("lunes");
    this.martes = localStorage.getItem("martes");
    this.miercoles = localStorage.getItem("miercoles");
    this.jueves = localStorage.getItem("jueves");
    this.viernes = localStorage.getItem("viernes");
    this.sabado = localStorage.getItem("sabado");
  }

  ngOnInit() {
    this.encontrarPasajero();
  }

  encontrarPasajero() {
    var _this = this;

    return (0,C_Users_Cristian_Desktop_tellevoapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.registroService.encontrarPasajero();

      console.log('Encontrando');
    })();
  }

  crearViaje(n, d) {
    return (0,C_Users_Cristian_Desktop_tellevoapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      localStorage.setItem('nomPasajero', n);
      localStorage.setItem('dirPasajero', d);
      console.log('Viaje creado');
    })();
  }

  loadUsuarios() {
    var _this2 = this;

    return (0,C_Users_Cristian_Desktop_tellevoapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.usuarios = yield _this2.registroService.getUsuarios();
      console.log('Cargando Usuarios');
    })();
  }

  mostrarNombre() {
    return this.nombreUsuario;
  }

  cerrarSesion() {
    localStorage.removeItem('ingresado');
    this.navController.navigateRoot('login');
  }

  mostrarMenu() {
    this.menuController.open('first');
  }

  alertError() {
    var _this3 = this;

    return (0,C_Users_Cristian_Desktop_tellevoapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this3.alertController.create({
        header: '¡Error!',
        message: 'Debe completar todos los datos',
        buttons: ['Aceptar']
      });
      yield alert.present();
    })();
  }

  onSubmit() {
    console.log('submit');
  }

};

PerfilcPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.MenuController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController
}, {
  type: _services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService
}];

PerfilcPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-perfilc',
  template: _perfilc_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_perfilc_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], PerfilcPage);


/***/ }),

/***/ 1115:
/*!************************************************************!*\
  !*** ./src/app/pages/perfilc/perfilc.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "-ion-icon {\n  margin: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcmZpbGMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKIiwiZmlsZSI6InBlcmZpbGMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLWlvbi1pY29ue1xyXG4gICAgbWFyZ2luOiAxMDBweDtcclxufSJdfQ== */";

/***/ }),

/***/ 5517:
/*!************************************************************!*\
  !*** ./src/app/pages/perfilc/perfilc.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"light\" >\n    <ion-title> <center> TeLlevo App </center>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-toolbar color=\"light\" >\n  <ion-segment value=\"all\">\n    <ion-segment-button value=\"viajar\">\n      Viajar\n    </ion-segment-button>\n    <ion-segment-button value=\"viajes\">\n      Mis viajes\n    </ion-segment-button>\n    <ion-segment-button value=\"pasajeros\">\n      Pasajeros\n    </ion-segment-button>\n  </ion-segment>\n</ion-toolbar>\n\n  <ion-item color=\"light\">\n    \n       <ion-icon name=\"person-circle-outline\" color=\"dark\" style=\"zoom:2.2;\"></ion-icon>\n    <ion-text color=\"dark\">\n      <h1>¡Bienvenido, {{mostrarNombre()}}!</h1>\n    </ion-text>\n    \n  </ion-item>\n\n  <br>\n\n  <ion-card color=\"light\">\n    <img src=\"assets/mapa.png\"/>\n  </ion-card>\n\n \n  <div *ngFor=\"let usuario of usuarios; let i=index\"  >\n       <ion-card color=\"dark\" *ngIf=\"usuario.disponible === true\" >\n        <ion-card-header>\n          <ion-card-title>Pasajero: {{ usuario.nomUsuario }}\n          </ion-card-title>\n          <ion-card-subtitle></ion-card-subtitle>\n        </ion-card-header>\n      <ion-card-content position=\"center\">\n        <img src=\"assets/mapa.png\"/>\n        <br>\n        <h1><center><b>{{ usuario.dirUsuario }}</b></center></h1>\n        \n      </ion-card-content>\n        <ion-button [routerLink] = \"['/viaje']\" (click)=\"crearViaje(usuario.nomUsuario,usuario.dirUsuario)\" color=\"primary\" expand=\"block\">Viajar</ion-button>\n      </ion-card>\n    </div>\n  \n\n\n<ion-card color=\"dark\">\n  \n  <ion-button [routerLink] = \"['/feriados']\" color=\"light\" expand=\"block\" fill=\"clear\" >\n    Revisa los feriados de este año\n  </ion-button>\n  </ion-card>\n\n<br>\n<br>\n<br>\n<br>\n\n\n<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n  <ion-fab-button (click)=\"cerrarSesion()\" color=\"danger\">\n    <ion-icon name=\"power\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n\n<ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\">\n  <ion-fab-button (click)=\"loadUsuarios()\" color=\"light\">\n    <ion-icon name=\"car-sport\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n\n<ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n\n  <ion-fab-button color=\"dark\">\n    <ion-icon name=\"share\">\n    </ion-icon>\n  </ion-fab-button>\n\n  <ion-fab-list side=\"top\">\n    <ion-fab-button><ion-icon name=\"link\"></ion-icon></ion-fab-button>\n    <ion-fab-button><ion-icon name=\"logo-whatsapp\"></ion-icon></ion-fab-button>\n    <ion-fab-button><ion-icon name=\"logo-instagram\"></ion-icon></ion-fab-button>\n    <ion-fab-button><ion-icon name=\"logo-twitter\"></ion-icon></ion-fab-button>\n  </ion-fab-list>\n\n</ion-fab>\n  \n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_perfilc_perfilc_module_ts.js.map