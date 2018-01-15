webpackJsonp([1],{

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelecionaClientePageModule", function() { return SelecionaClientePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__seleciona_cliente__ = __webpack_require__(447);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SelecionaClientePageModule = (function () {
    function SelecionaClientePageModule() {
    }
    SelecionaClientePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__seleciona_cliente__["a" /* SelecionaClientePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__seleciona_cliente__["a" /* SelecionaClientePage */]),
            ],
        })
    ], SelecionaClientePageModule);
    return SelecionaClientePageModule;
}());

//# sourceMappingURL=seleciona-cliente.module.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelecionaClientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SelecionaClientePage = (function () {
    function SelecionaClientePage(navCtrl, navParams, modal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modal = modal;
        this.nomeCliente = "";
        this.celCliente = "";
        this.prosseguir = false;
    }
    SelecionaClientePage.prototype.openModalCliente = function () {
        var _this = this;
        var modal = this.modal.create('ModalClientePage');
        modal.onDidDismiss(function (data) {
            // Do things with data coming from modal, for instance :
            console.log(data);
            _this.dadosCliente = data;
            _this.nomeCliente = _this.dadosCliente.nome;
            _this.celCliente = _this.dadosCliente.celular;
            if (_this.celCliente != '' && _this.celCliente != undefined) {
                _this.prosseguir = true;
            }
            else {
                _this.prosseguir = false;
            }
        });
        modal.present();
    };
    SelecionaClientePage.prototype.openModalAddCliente = function () {
        var _this = this;
        var modal = this.modal.create('NovoClientePage', { dadosCliente: {}, funcao: 'incluirfrompedido' });
        modal.onDidDismiss(function (data) {
            // Do things with data coming from modal, for instance :
            console.log(data);
            _this.dadosCliente = data;
            _this.nomeCliente = _this.dadosCliente.nome;
            _this.celCliente = _this.dadosCliente.celular;
            if (_this.celCliente != '' && _this.celCliente != undefined) {
                _this.prosseguir = true;
            }
            else {
                _this.prosseguir = false;
            }
        });
        modal.present();
    };
    SelecionaClientePage.prototype.goPedidos = function () {
        this.navCtrl.push('PedidosPage', this.dadosCliente);
    };
    SelecionaClientePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-seleciona-cliente',template:/*ion-inline-start:"C:\Users\rodnei.brassoroto\Documents\GitHub\ionic\davisa\src\pages\seleciona-cliente\seleciona-cliente.html"*/`<ion-header>\n  <br>\n  <ion-navbar>\n      <ion-buttons right>\n        <!--\n        <button ion-fab mini color="primary">\n            <ion-icon name="add"></ion-icon>\n        </button>\n      -->\n      </ion-buttons>\n    <ion-title>Selecionar Cliente</ion-title>\n  </ion-navbar>\n\n  <ion-row align-items-center>\n      <ion-col col-3>\n        <button ion-fab mini color="primary" (click)="openModalAddCliente()">\n            <ion-icon name="add"></ion-icon>\n        </button>\n      </ion-col>      \n      <ion-col col-6>\n        <div class="iconeCliente">\n          <ion-icon name="contact"></ion-icon>\n        </div>\n      </ion-col>\n      <ion-col col-3>\n        <button ion-fab mini color="primary" (click)="openModalCliente()">\n            <ion-icon name="search"></ion-icon>\n        </button>\n      </ion-col>\n  </ion-row>\n  <ion-row justify-content-center>\n    <div class="nomeCliente">\n      {{nomeCliente}}\n    </div>\n  </ion-row>\n</ion-header>\n\n\n<ion-content padding>\n    <br><br>\n    <button ion-button block type="button" [disabled]="!prosseguir" color="primary" round (click)="goPedidos()">Prosseguir</button>    \n</ion-content>\n`/*ion-inline-end:"C:\Users\rodnei.brassoroto\Documents\GitHub\ionic\davisa\src\pages\seleciona-cliente\seleciona-cliente.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], SelecionaClientePage);
    return SelecionaClientePage;
}());

//# sourceMappingURL=seleciona-cliente.js.map

/***/ })

});
//# sourceMappingURL=1.js.map