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
        this.arrayProdutos = [];
        this.totalItens = 0;
        this.valorTotal = 0.00;
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
            if (dataProd != "") {
                _this.totalItens = _this.totalItens + 1;
                _this.valorTotal = _this.valorTotal + parseFloat(dataProd.valVenda);
                _this.arrayProdutos.push(dataProd);
            }
            //this.detalhesPedido.itens.push(dataProd);
            //this.nomeCliente = this.dadosProduto.nome;
        });
        modal.present();
    };
    PedidosPage.prototype.excluirItem = function (item) {
        alert(item);
        //this.arrayProdutos.splice(item);
    };
    PedidosPage.prototype.criaPedido = function (detalhesPedido) {
        this.pedido.criarPedido(detalhesPedido);
    };
    PedidosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pedidos',template:/*ion-inline-start:"C:\Users\rodnei.brassoroto\Documents\GitHub\ionic\davisa\src\pages\pedidos\pedidos.html"*/`<ion-header>\n  <br>\n  <ion-navbar>\n      <ion-buttons right>\n        <!--\n        <button ion-fab mini color="primary">\n            <ion-icon name="add"></ion-icon>\n        </button>\n      -->\n      </ion-buttons>\n    <ion-title>Novo Pedido</ion-title>\n  </ion-navbar>\n\n  <ion-row align-items-center>\n      <ion-col col-3>\n        <button ion-fab mini color="primary">\n            <ion-icon name="add"></ion-icon>\n        </button>\n      </ion-col>      \n      <ion-col col-6>\n        <div class="iconeCliente">\n          <ion-icon name="contact"></ion-icon>\n        </div>\n      </ion-col>\n      <ion-col col-3>\n        <button ion-fab mini color="primary" (click)="openModalCliente()">\n            <ion-icon name="search"></ion-icon>\n        </button>\n      </ion-col>\n    <!--\n    <button ion-button block type="button" color="primary" round (click)="openModalCliente()">Localizar Cliente</button>\n    -->  \n  </ion-row>\n  <ion-row justify-content-center>\n    <div class="nomeCliente">\n      {{nomeCliente}}\n    </div>\n  </ion-row>\n  <br>\n  <ion-row justify-content-center>\n    <div class="nomeCliente">\n      Adicionar itens\n    </div>\n  </ion-row>\n  <ion-row align-items-center>\n      <ion-col col-6>\n        <button ion-fab mini color="primary" (click)="openModalProduto()">\n          <ion-icon name="search"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-fab mini color="primary">\n          <ion-icon name="barcode"></ion-icon>\n        </button>\n      </ion-col>\n    <!--\n    <button ion-button block type="button" color="primary" round (click)="openModalCliente()">Localizar Cliente</button>\n    -->  \n  </ion-row>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n    \n    <ion-row justify-content-center>\n      <ion-col>\n        \n        <ion-list>\n          <ion-item-sliding *ngFor="let item of arrayProdutos">\n            \n            <ion-item>\n              \n              <ion-row>\n                <ion-col justify-content-start>{{item.desc}}</ion-col>\n              </ion-row>\n              \n              <ion-row>\n                <ion-col class="prod_detail" justify-content-start col-5>Tam: {{ item.tamanho }}</ion-col>\n                <ion-col class="prod_detail" justify-content-end col-3>Cor: {{ item.cor }}</ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col class="prod_detail" justify-content-start col-5>Marca: {{ item.marca }}</ion-col>\n                <ion-col class="prod_detail" justify-content-end col-3>Preço: {{ item.valVenda }}</ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col class="prod_detail" justify-content-start col-5>Disp.: {{ item.qtd_disp }}</ion-col>\n              </ion-row>\n                          \n              \n              <i class="icon ion-chevron-right"></i>\n            </ion-item>\n            \n            <ion-item-options side="right">\n              <button ion-button color="danger" icon-only (click)="excluirItem(item.codBarras)">\n                  <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-list>\n\n        <ion-row>\n          <ion-col col-6>Itens: {{totalItens}}</ion-col>\n          <ion-col col-6>Valor: {{valorTotal | currency}}</ion-col>\n        </ion-row>\n\n        <br>\n\n        <button ion-button block type="button" color="primary" round>Confirmar</button>\n\n      </ion-col>  \n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n`/*ion-inline-end:"C:\Users\rodnei.brassoroto\Documents\GitHub\ionic\davisa\src\pages\pedidos\pedidos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_pedido_service_pedido_service__["a" /* PedidoServiceProvider */]])
    ], PedidosPage);
    return PedidosPage;
}());

//# sourceMappingURL=pedidos.js.map

/***/ })

});
//# sourceMappingURL=2.js.map