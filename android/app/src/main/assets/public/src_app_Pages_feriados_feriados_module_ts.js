"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_Pages_feriados_feriados_module_ts"],{

/***/ 1112:
/*!***********************************************************!*\
  !*** ./src/app/Pages/feriados/feriados-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeriadosPageRoutingModule": () => (/* binding */ FeriadosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _feriados_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feriados.page */ 2650);




const routes = [
    {
        path: '',
        component: _feriados_page__WEBPACK_IMPORTED_MODULE_0__.FeriadosPage
    }
];
let FeriadosPageRoutingModule = class FeriadosPageRoutingModule {
};
FeriadosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FeriadosPageRoutingModule);



/***/ }),

/***/ 236:
/*!***************************************************!*\
  !*** ./src/app/Pages/feriados/feriados.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeriadosPageModule": () => (/* binding */ FeriadosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _feriados_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feriados-routing.module */ 1112);
/* harmony import */ var _feriados_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feriados.page */ 2650);







let FeriadosPageModule = class FeriadosPageModule {
};
FeriadosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _feriados_routing_module__WEBPACK_IMPORTED_MODULE_0__.FeriadosPageRoutingModule
        ],
        declarations: [_feriados_page__WEBPACK_IMPORTED_MODULE_1__.FeriadosPage]
    })
], FeriadosPageModule);



/***/ }),

/***/ 2650:
/*!*************************************************!*\
  !*** ./src/app/Pages/feriados/feriados.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeriadosPage": () => (/* binding */ FeriadosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _feriados_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feriados.page.html?ngResource */ 3996);
/* harmony import */ var _feriados_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feriados.page.scss?ngResource */ 3376);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_feriados_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/feriados.service */ 8057);





let FeriadosPage = class FeriadosPage {
    constructor(feriadosService) {
        this.feriadosService = feriadosService;
        this.feriados = [];
    }
    ngOnInit() {
        this.feriadosService.getDiasFeriados().subscribe(resp => {
            console.log('feriados', resp);
            this.feriados.push(...resp.data);
        });
    }
};
FeriadosPage.ctorParameters = () => [
    { type: _services_feriados_service__WEBPACK_IMPORTED_MODULE_2__.FeriadosService }
];
FeriadosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-feriados',
        template: _feriados_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_feriados_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FeriadosPage);



/***/ }),

/***/ 8057:
/*!****************************************************!*\
  !*** ./src/app/Pages/services/feriados.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeriadosService": () => (/* binding */ FeriadosService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);



let FeriadosService = class FeriadosService {
    constructor(httpclient) {
        this.httpclient = httpclient;
    }
    getDiasFeriados() {
        return (this.httpclient.get('https://api.victorsanmartin.com/feriados/en.json'));
    }
};
FeriadosService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
FeriadosService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], FeriadosService);



/***/ }),

/***/ 3376:
/*!**************************************************************!*\
  !*** ./src/app/Pages/feriados/feriados.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZXJpYWRvcy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 3996:
/*!**************************************************************!*\
  !*** ./src/app/Pages/feriados/feriados.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title><center>Feriados en Chile 2022</center></ion-title> \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid fixed> \n    <ion-row>\n      <ion-col size=\"12\" size-lg=\"3\" size-md=\"4\" size-sm=\"6\" size-xs=\"12\"\n          *ngFor=\"let feriado of feriados; let i=index\">\n  \n          <ion-card color=\"dark\">\n            <ion-card-header>\n                <ion-card-subtitle>\n                  <span class=\"text-primary\">{{i + 1}}. </span>\n                  <span> {{feriado.title}}</span> </ion-card-subtitle>\n                <ion-card-title> {{feriado.date}}</ion-card-title>\n            </ion-card-header>\n            \n            <ion-card-content>\n             <h2>\n                {{feriado.type}}\n              </h2>\n            </ion-card-content>\n          </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid> \n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_Pages_feriados_feriados_module_ts.js.map