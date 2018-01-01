webpackJsonp([2],{

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidosPageModule", function() { return PedidosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pedidos__ = __webpack_require__(440);
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

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_pedido_service_pedido_service__ = __webpack_require__(275);
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
    function PedidosPage(navCtrl, navParams, modal, pedido) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modal = modal;
        this.pedido = pedido;
        this.clienteSelecionado = false;
        this.nomeCliente = "";
        this.celCliente = "";
        this.dataHora = "";
    }
    PedidosPage.prototype.openModalCliente = function () {
        var _this = this;
        var modal = this.modal.create('ModalClientePage');
        modal.onDidDismiss(function (data) {
            // Do things with data coming from modal, for instance :
            console.log(data);
            _this.dadosCliente = data;
            _this.nomeCliente = _this.dadosCliente.nome;
            _this.celCliente = _this.dadosCliente.celular;
            //this.detalhesPedido.celCliente = this.celCliente;
            //this.detalhesPedido.nomCliente = this.nomeCliente;        
            //this.detalhesPedido.dataHora =  new Date().toISOString(); 
            if (_this.celCliente != "") {
                _this.clienteSelecionado = true;
                //this.criaPedido(this.detalhesPedido);
            }
            else {
                _this.clienteSelecionado = false;
            }
        });
        modal.present();
    };
    PedidosPage.prototype.openModalProduto = function () {
        var _this = this;
        var modal = this.modal.create('ModalProdutoPage');
        modal.onDidDismiss(function (dataProd) {
            // Do things with data coming from modal, for instance :
            console.log(dataProd);
            _this.dadosProduto = dataProd;
            //this.nomeCliente = this.dadosProduto.nome;
        });
        modal.present();
    };
    PedidosPage.prototype.criaPedido = function (detalhesPedido) {
        this.pedido.criarPedido(detalhesPedido);
    };
    PedidosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pedidos',template:/*ion-inline-start:"C:\Users\rodnei.brassoroto\Documents\GitHub\ionic\davisa\src\pages\pedidos\pedidos.html"*/`<ion-header>\n  <br>\n  <ion-navbar>\n      <ion-buttons right>\n        <!--\n        <button ion-fab mini color="primary">\n            <ion-icon name="add"></ion-icon>\n        </button>\n      -->\n      </ion-buttons>\n    <ion-title>Novo Pedido</ion-title>\n  </ion-navbar>\n  <ion-row col-12>\n    <button ion-button block type="button" color="primary" round (click)="openModalCliente()">Localizar Cliente</button>\n  </ion-row>\n</ion-header>\n\n\n<ion-content>\n  <br>\n\n  <ion-grid>\n    \n    <ion-row justify-content-center>\n      <ion-col>\n\n        <div class="iconeCliente">\n          <ion-icon  (click)="openModalCliente()" name="contact"></ion-icon>\n        </div>\n        <div class="nomeCliente">\n          {{nomeCliente}}\n        </div>\n\n        <br>\n\n        <ion-row>\n          Incluir item: \n            <ion-buttons right>\n              <button ion-fab mini color="primary" (click)="openModalProduto()">\n                <ion-icon name="search"></ion-icon>\n              </button>\n            </ion-buttons>\n            \n            <ion-buttons right>\n              <button ion-fab mini color="primary">\n                <ion-icon name="barcode"></ion-icon>\n              </button>\n            </ion-buttons>\n        </ion-row>\n\n        <ion-list>\n          <ion-item-sliding >\n            <ion-item>\n              \n              <ion-row>\n                <ion-col justify-content-start>Calcinha</ion-col>\n              </ion-row>\n              \n              <ion-row>\n                <ion-col class="prod_detail" justify-content-start col-5>Tam: GG</ion-col>\n                <ion-col class="prod_detail" justify-content-end col-3>Cor: Preta</ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col class="prod_detail" justify-content-start col-5>Marca: DeMillus</ion-col>\n                <ion-col class="prod_detail" justify-content-end col-3>Preço: 14,99</ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col class="prod_detail" justify-content-start col-5>Qtd: 1</ion-col>\n              </ion-row>\n              \n            </ion-item>\n            \n            <ion-item-options side="right">\n              <button ion-button color="danger" icon-only>\n                  <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-item-options>\n          </ion-item-sliding>\n\n          <ion-item-sliding >\n            <ion-item>\n              \n              <ion-row>\n                <ion-col justify-content-start>Sutiã</ion-col>\n              </ion-row>\n              \n              <ion-row>\n                <ion-col class="prod_detail" justify-content-start col-5>Tam: 46</ion-col>\n                <ion-col class="prod_detail" justify-content-end col-3>Cor: Branco</ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col class="prod_detail" justify-content-start col-5>Marca: Valisére</ion-col>\n                <ion-col class="prod_detail" justify-content-end col-3>Preço: 44,00</ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col class="prod_detail" justify-content-start col-5>Qtd: 1</ion-col>\n              </ion-row>\n              \n            </ion-item>\n            \n            <ion-item-options side="right">\n              <button ion-button color="danger" icon-only>\n                  <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-list>\n\n        <button ion-button block type="button" color="primary" round>Confirmar</button>\n\n      </ion-col>  \n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n`/*ion-inline-end:"C:\Users\rodnei.brassoroto\Documents\GitHub\ionic\davisa\src\pages\pedidos\pedidos.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_pedido_service_pedido_service__["a" /* PedidoServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_pedido_service_pedido_service__["a" /* PedidoServiceProvider */]) === "function" && _d || Object])
    ], PedidosPage);
    return PedidosPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=pedidos.js.map

/***/ })

});
//# sourceMappingURL=2.js.map