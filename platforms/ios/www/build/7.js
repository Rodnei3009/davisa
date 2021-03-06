webpackJsonp([7],{

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesPageModule", function() { return ClientesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clientes__ = __webpack_require__(439);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ClientesPageModule = (function () {
    function ClientesPageModule() {
    }
    ClientesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__clientes__["a" /* ClientesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__clientes__["a" /* ClientesPage */]),
            ],
        })
    ], ClientesPageModule);
    return ClientesPageModule;
}());

//# sourceMappingURL=clientes.module.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_firebase_service_cliente_service__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
var ClientesPage = (function () {
    function ClientesPage(navCtrl, navParams, ClienteServiceProvider, loadingCRTL) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ClienteServiceProvider = ClienteServiceProvider;
        this.loadingCRTL = loadingCRTL;
        this.novoCliente = '';
        this.idCliente = '';
        var loading = this.showLoading();
        this.strQueryCliente = { query: { orderByChild: 'nome' } };
        this.listaClientes = this.ClienteServiceProvider.listarCliente(this.strQueryCliente);
        this.listaClientes.subscribe(function () { return loading.dismiss(); });
    }
    ClientesPage.prototype.addCliente = function () {
        this.ClienteServiceProvider.adicionarCliente(this.novoCliente);
    };
    ClientesPage.prototype.delCliente = function (idcliente) {
        this.ClienteServiceProvider.deletarCliente(idcliente);
    };
    ClientesPage.prototype.selecionaCliente = function (cliente) {
        console.log(cliente);
        this.navCtrl.push('NovoClientePage', { dadosCliente: cliente, funcao: 'atualizar' });
    };
    ClientesPage.prototype.novo_Cliente = function () {
        this.navCtrl.push('NovoClientePage', { dadosCliente: {}, funcao: 'incluir' });
    };
    ClientesPage.prototype.showLoading = function () {
        var loading = this.loadingCRTL.create({});
        loading.present();
        return loading;
    };
    ClientesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-clientes',template:/*ion-inline-start:"C:\Users\rodnei.brassoroto\Documents\GitHub\ionic\davisa\src\pages\clientes\clientes.html"*/`<ion-header>\n  <br>\n  <ion-navbar>\n      <ion-buttons right>\n        <button ion-fab mini color="primary" (click)="novo_Cliente()">\n            <ion-icon name="add"></ion-icon>\n        </button>\n      </ion-buttons>\n    <ion-title>Clientes</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <br>\n\n  <ion-grid>\n    \n    <ion-row justify-content-center>\n      <ion-col>\n\n        <!--\n        <ion-spinner name="circles"></ion-spinner>\n        -->\n        <ion-list>\n          <ion-item-sliding *ngFor="let item of listaClientes | async">\n            <ion-item (click)="selecionaCliente(item)" detail-push>\n              <ion-icon name="contact" item-left></ion-icon>\n              {{item.nome}}\n              <i class="icon ion-chevron-right"></i>\n            </ion-item>\n            <ion-item-options side="right">\n              <button ion-button color="danger" icon-only (click)="delCliente(item.$key)">\n                  <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-list>\n\n        <!--\n        <button ion-button block (click)="novo_Cliente()" color="danger">Novo Cliente</button>\n        -->  \n\n      </ion-col>  \n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n`/*ion-inline-end:"C:\Users\rodnei.brassoroto\Documents\GitHub\ionic\davisa\src\pages\clientes\clientes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_firebase_service_cliente_service__["a" /* ClienteServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* LoadingController */]])
    ], ClientesPage);
    return ClientesPage;
}());

//# sourceMappingURL=clientes.js.map

/***/ })

});
//# sourceMappingURL=7.js.map