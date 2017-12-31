webpackJsonp([2],{

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidosPageModule", function() { return PedidosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pedidos__ = __webpack_require__(432);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PedidosPageModule = (function () {
    function PedidosPageModule() {
    }
    PedidosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pedidos__["a" /* PedidosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pedidos__["a" /* PedidosPage */]),
            ],
        })
    ], PedidosPageModule);
    return PedidosPageModule;
}());

//# sourceMappingURL=pedidos.module.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PedidosPage = (function () {
    function PedidosPage(navCtrl, navParams, modal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modal = modal;
        this.nomeCliente = "";
    }
    PedidosPage.prototype.openModal = function () {
        var _this = this;
        var modal = this.modal.create('ModalClientePage');
        modal.onDidDismiss(function (data) {
            // Do things with data coming from modal, for instance :
            console.log(data);
            _this.dadosCliente = data;
            _this.nomeCliente = _this.dadosCliente.nome;
        });
        modal.present();
        //const modalCliente: Modal = this.modal.create('ModalClientePage');
        //modalCliente.present();
    };
    PedidosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PedidosPage');
    };
    PedidosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pedidos',template:/*ion-inline-start:"C:\Users\rodnei.brassoroto\Documents\GitHub\ionic\davisa\src\pages\pedidos\pedidos.html"*/`<ion-header>\n  <br>\n  <ion-navbar>\n      <ion-buttons right>\n        <button ion-fab mini color="primary">\n            <ion-icon name="add"></ion-icon>\n        </button>\n      </ion-buttons>\n    <ion-title>Novo Pedido</ion-title>\n  </ion-navbar>\n  <ion-row col-12>\n    <button ion-button block type="button" color="primary" round (click)="openModal()">Localizar Cliente</button>\n  </ion-row>\n</ion-header>\n\n\n<ion-content>\n  <br>\n\n  <ion-grid>\n    \n    <ion-row justify-content-center>\n      <ion-col>\n\n        <div class="iconeCliente">\n          <ion-icon name="contact"></ion-icon>\n        </div>\n        <div class="nomeCliente">\n          {{nomeCliente}}\n        </div>\n\n        <ion-list>\n          <ion-item-sliding >\n            <ion-item>\n              \n              <ion-row>\n                <ion-col justify-content-start>Calcinha</ion-col>\n              </ion-row>\n              \n              <ion-row>\n                <ion-col class="prod_detail" justify-content-start col-5>Tam: GG</ion-col>\n                <ion-col class="prod_detail" justify-content-end col-3>Cor: Preta</ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col class="prod_detail" justify-content-start col-5>Marca: DeMillus</ion-col>\n                <ion-col class="prod_detail" justify-content-end col-3>Preço: 14,99</ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col class="prod_detail" justify-content-start col-5>Qtd: 1</ion-col>\n              </ion-row>\n              \n            </ion-item>\n            \n            <ion-item-options side="right">\n              <button ion-button color="danger" icon-only>\n                  <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-item-options>\n          </ion-item-sliding>\n\n          <ion-item-sliding >\n            <ion-item>\n              \n              <ion-row>\n                <ion-col justify-content-start>Sutiã</ion-col>\n              </ion-row>\n              \n              <ion-row>\n                <ion-col class="prod_detail" justify-content-start col-5>Tam: 46</ion-col>\n                <ion-col class="prod_detail" justify-content-end col-3>Cor: Branco</ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col class="prod_detail" justify-content-start col-5>Marca: Valisére</ion-col>\n                <ion-col class="prod_detail" justify-content-end col-3>Preço: 44,00</ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col class="prod_detail" justify-content-start col-5>Qtd: 1</ion-col>\n              </ion-row>\n              \n            </ion-item>\n            \n            <ion-item-options side="right">\n              <button ion-button color="danger" icon-only>\n                  <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-list>\n\n        <button ion-button block type="button" color="primary" round>Confirmar</button>\n\n      </ion-col>  \n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n`/*ion-inline-end:"C:\Users\rodnei.brassoroto\Documents\GitHub\ionic\davisa\src\pages\pedidos\pedidos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], PedidosPage);
    return PedidosPage;
}());

//# sourceMappingURL=pedidos.js.map

/***/ })

});
//# sourceMappingURL=2.js.map