"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_Pages_viaje_viaje_module_ts"],{

/***/ 3779:
/*!*****************************************************!*\
  !*** ./src/app/Pages/viaje/viaje-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViajePageRoutingModule": () => (/* binding */ ViajePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _viaje_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viaje.page */ 7965);




const routes = [
    {
        path: '',
        component: _viaje_page__WEBPACK_IMPORTED_MODULE_0__.ViajePage
    }
];
let ViajePageRoutingModule = class ViajePageRoutingModule {
};
ViajePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ViajePageRoutingModule);



/***/ }),

/***/ 352:
/*!*********************************************!*\
  !*** ./src/app/Pages/viaje/viaje.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViajePageModule": () => (/* binding */ ViajePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _viaje_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viaje-routing.module */ 3779);
/* harmony import */ var _viaje_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viaje.page */ 7965);







let ViajePageModule = class ViajePageModule {
};
ViajePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _viaje_routing_module__WEBPACK_IMPORTED_MODULE_0__.ViajePageRoutingModule
        ],
        declarations: [_viaje_page__WEBPACK_IMPORTED_MODULE_1__.ViajePage]
    })
], ViajePageModule);



/***/ }),

/***/ 7965:
/*!*******************************************!*\
  !*** ./src/app/Pages/viaje/viaje.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViajePage": () => (/* binding */ ViajePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _viaje_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viaje.page.html?ngResource */ 1121);
/* harmony import */ var _viaje_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viaje.page.scss?ngResource */ 4551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let ViajePage = class ViajePage {
    constructor() {
        this.nombreUsuario = localStorage.getItem('nombre');
        this.dirUsuario = localStorage.getItem('direccion');
        this.nombrePasajero = localStorage.getItem('nomPasajero');
        this.dirPasajero = localStorage.getItem('dirPasajero');
    }
    ngOnInit() {
    }
    mostrarNombre() {
        return this.nombreUsuario;
    }
    mostrarDire() {
        return this.dirUsuario;
    }
    mostrarNombrePas() {
        return this.nombrePasajero;
    }
    mostrarDirePas() {
        return this.dirPasajero;
    }
};
ViajePage.ctorParameters = () => [];
ViajePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-viaje',
        template: _viaje_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_viaje_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ViajePage);



/***/ }),

/***/ 4551:
/*!********************************************************!*\
  !*** ./src/app/Pages/viaje/viaje.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWFqZS5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 1121:
/*!********************************************************!*\
  !*** ./src/app/Pages/viaje/viaje.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title><center>Comenzar viaje</center></ion-title> \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card color=\"light\">\n    <img src=\"assets/mapa.png\"/>\n  </ion-card>\n\n  <ion-card color=\"dark\">\n    <ion-card-header>\n      <ion-card-title>Parada en: {{ mostrarDirePas() }}\n      </ion-card-title>\n      <ion-card-subtitle>Dirrecion de: {{ mostrarNombrePas() }}\n      </ion-card-subtitle>\n    </ion-card-header>\n  </ion-card>\n\n  <ion-card color=\"dark\">\n    <ion-card-header>\n      <ion-card-title>Destino: {{ mostrarDire() }}\n      </ion-card-title>\n      <ion-card-subtitle>Dirrecion de: {{ mostrarNombre() }}\n      </ion-card-subtitle>\n    </ion-card-header>\n  </ion-card>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_Pages_viaje_viaje_module_ts.js.map