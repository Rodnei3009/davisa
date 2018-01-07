webpackJsonp([15],{

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalClientePageModule", function() { return ModalClientePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_cliente__ = __webpack_require__(438);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalClientePageModule = (function () {
    function ModalClientePageModule() {
    }
    ModalClientePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal_cliente__["a" /* ModalClientePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_cliente__["a" /* ModalClientePage */]),
            ],
        })
    ], ModalClientePageModule);
    return ModalClientePageModule;
}());

//# sourceMappingURL=modal-cliente.module.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalClientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_cliente_service__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModalClientePage = (function () {
    function ModalClientePage(navParams, view, cliente, loadingCRTL) {
        this.navParams = navParams;
        this.view = view;
        this.cliente = cliente;
        this.loadingCRTL = loadingCRTL;
        this.clienteCel = "";
        this.clienteNome = "";
        this.startAt = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.endAt = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.equalTo = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
    }
    ModalClientePage.prototype.closeModal = function (cliente) {
        this.view.dismiss(cliente);
    };
    ModalClientePage.prototype.pesquisarPorNome = function () {
        if (this.clienteNome != "") {
            var loading_1 = this.showLoading();
            var nome;
            nome = this.clienteNome;
            this.clienteCel = "";
            this.strQuery = { query: { orderByChild: 'nome', startAt: nome, endAt: nome + '\uf8ff' } };
            this.listaCliente = this.cliente.listarCliente(this.strQuery);
            this.listaCliente.subscribe(function () { return loading_1.dismiss(); });
        }
    };
    ModalClientePage.prototype.pesquisarPorCel = function () {
        var loading = this.showLoading();
        var celular;
        celular = this.clienteCel;
        this.clienteNome = "";
        this.strQuery = { query: { orderByChild: 'celular', equalTo: celular } };
        this.listaCliente = this.cliente.listarCliente(this.strQuery);
        this.listaCliente.subscribe(function () { return loading.dismiss(); });
    };
    ModalClientePage.prototype.showLoading = function () {
        var loading = this.loadingCRTL.create({});
        loading.present();
        return loading;
    };
    ModalClientePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-cliente',template:/*ion-inline-start:"C:\Users\rodnei.brassoroto\Documents\GitHub\ionic\davisa\src\pages\modal-cliente\modal-cliente.html"*/`<ion-header>\n  <br>\n  <ion-navbar>\n    <ion-buttons right>\n      <button ion-fab mini color="primary" (click)="closeModal(\'\')">\n          <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Selecionar Cliente</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-row col-12>\n        <ion-searchbar [(ngModel)]="clienteNome" placeholder="Pesquisar pelo nome" class="rounded"></ion-searchbar>\n        <button ion-button block type="button" color="primary" round (click)="pesquisarPorNome()">Pesquisar por Nome</button>\n    </ion-row>\n    <ion-row col-12>\n        <ion-searchbar [(ngModel)]="clienteCel" placeholder="Pesquisar pelo celular" class="rounded"></ion-searchbar>\n      <button ion-button block type="button" color="primary" round (click)="pesquisarPorCel()">Pesquisar por Celular</button>\n    </ion-row>\n\n    <ion-list>\n      <ion-item-sliding *ngFor="let item of listaCliente | async">\n        <ion-item (click)="closeModal(item)" detail-push>\n          <ion-icon name="contact" item-left></ion-icon>\n            {{item.nome}}\n          <i class="icon ion-chevron-right"></i>\n        </ion-item>\n      </ion-item-sliding>\n    </ion-list>\n\n</ion-content>\n`/*ion-inline-end:"C:\Users\rodnei.brassoroto\Documents\GitHub\ionic\davisa\src\pages\modal-cliente\modal-cliente.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_cliente_service__["a" /* ClienteServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], ModalClientePage);
    return ModalClientePage;
}());

//# sourceMappingURL=modal-cliente.js.map

/***/ })

});
//# sourceMappingURL=15.js.map