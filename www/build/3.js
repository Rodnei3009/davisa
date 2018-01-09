webpackJsonp([3],{

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidosPageModule", function() { return PedidosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pedidos__ = __webpack_require__(441);
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

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_pedido_service_pedido_service__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_produto_service_produto_service__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var PedidosPage = (function () {
    function PedidosPage(navCtrl, navParams, modal, pedido, BarcodeScanner, loadingCRTL, produto) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modal = modal;
        this.pedido = pedido;
        this.BarcodeScanner = BarcodeScanner;
        this.loadingCRTL = loadingCRTL;
        this.produto = produto;
        this.arrayProdutos = [];
        this.totalItens = 0;
        this.valorTotal = 0.00;
        this.clienteSelecionado = false;
        this.nomeCliente = "";
        this.celCliente = "";
        this.dataHora = "";
        this.codBarrasRetorno = "";
        this.dadosCliente = this.navParams.data;
    }
    PedidosPage.prototype.openModalProduto = function () {
        var _this = this;
        var val = 0;
        var modal = this.modal.create('ModalProdutoPage');
        modal.onDidDismiss(function (dataProd) {
            // Do things with data coming from modal, for instance :
            console.log(dataProd);
            _this.dadosProduto = dataProd;
            if (dataProd != "") {
                _this.arrayProdutos.push(dataProd);
                _this.totalItens = _this.arrayProdutos.length;
                _this.valorTotal = _this.arrayProdutos.reduce(function (prevVal, elem) {
                    return prevVal + parseFloat(elem.valVenda);
                }, 0);
            }
        });
        modal.present();
    };
    PedidosPage.prototype.excluirItem = function (item) {
        //alert(item);
        var i = 0;
        for (i = 0; i < this.arrayProdutos.length; i++) {
            //alert(this.arrayProdutos[i].codBarras);
            if (this.arrayProdutos[i].codBarras === item) {
                this.arrayProdutos.splice(i, 1);
                this.totalItens = this.arrayProdutos.length;
                this.valorTotal = this.arrayProdutos.reduce(function (prevVal, elem) {
                    return prevVal + parseFloat(elem.valVenda);
                }, 0);
            }
        }
        //this.arrayProdutos.splice(item);
    };
    PedidosPage.prototype.criaPedido = function (detalhesPedido) {
        this.pedido.criarPedido(detalhesPedido);
    };
    PedidosPage.prototype.addProd = function (prod) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.arrayProdutos.push(prod)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PedidosPage.prototype.onGetBarcode = function () {
        var _this = this;
        this.BarcodeScanner.scan()
            .then(function (barcodeResult) {
            var loading = _this.showLoading();
            var finalizou;
            _this.barcodeResult = barcodeResult;
            _this.codBarrasRetorno = _this.barcodeResult.text;
            _this.strQueryProduto = { query: { orderByChild: 'codBarras', equalTo: _this.codBarrasRetorno } };
            _this.listaProduto = _this.produto.listarProduto(_this.strQueryProduto);
            //this.listaProduto.subscribe(produtos => produtos.forEach(produto => this.arrayProdutos.push(produto)));
            _this.listaProduto.subscribe(function (produtos) { return produtos.forEach(function (produto) { return _this.addProd(produto); }); });
            _this.totalItens = _this.arrayProdutos.length;
            _this.valorTotal = _this.arrayProdutos.reduce(function (prevVal, elem) {
                return prevVal + parseFloat(elem.valVenda);
            }, 0);
            loading.dismiss();
        }).catch(function (error) {
            console.log('barcode error: ', error);
        });
    };
    PedidosPage.prototype.showLoading = function () {
        var loading = this.loadingCRTL.create({});
        loading.present();
        return loading;
    };
    PedidosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pedidos',template:/*ion-inline-start:"C:\Users\rodnei.brassoroto\Documents\GitHub\ionic\davisa\src\pages\pedidos\pedidos.html"*/`<ion-header>\n  <br>\n  <ion-navbar>\n    <ion-title>Novo Pedido</ion-title>\n  </ion-navbar>\n\n  <ion-row>\n    <ion-col>\n      <div class="iconeCli">\n        <ion-icon name="contact"></ion-icon>\n      </div>\n    </ion-col>\n  </ion-row>\n  <ion-row justify-content-center>\n    <div class="nomeCli">\n      {{dadosCliente.nome}}\n    </div>\n  </ion-row>\n\n  <br>\n\n  <ion-row justify-content-center>\n    <div class="nomeCliente">\n      Adicionar itens\n    </div>\n  </ion-row>\n  <ion-row align-items-center>\n      <ion-col col-6>\n        <button ion-fab mini color="primary" (click)="openModalProduto()">\n          <ion-icon name="search"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-fab mini color="primary" (click)="onGetBarcode()">\n          <ion-icon name="barcode"></ion-icon>\n        </button>\n      </ion-col>\n    <!--\n    <button ion-button block type="button" color="primary" round (click)="openModalCliente()">Localizar Cliente</button>\n    -->  \n  </ion-row>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n    \n    <ion-row justify-content-center>\n      <ion-col>\n        \n        <ion-list>\n          <ion-item-sliding *ngFor="let item of arrayProdutos">\n            \n            <ion-item>\n              \n              <ion-row>\n                <ion-col justify-content-start>{{item.desc}}</ion-col>\n              </ion-row>\n              \n              <ion-row>\n                <ion-col class="prod_detail" justify-content-start col-5>Tam: {{ item.tamanho }}</ion-col>\n                <ion-col class="prod_detail" justify-content-end col-3>Cor: {{ item.cor }}</ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col class="prod_detail" justify-content-start col-5>Marca: {{ item.marca }}</ion-col>\n                <ion-col class="prod_detail" justify-content-end col-3>Preço: {{ item.valVenda }}</ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col class="prod_detail" justify-content-start col-5>Disp.: {{ item.qtd_disp }}</ion-col>\n              </ion-row>\n                          \n              \n              <i class="icon ion-chevron-right"></i>\n            </ion-item>\n            \n            <ion-item-options side="right">\n              <button ion-button color="danger" icon-only (click)="excluirItem(item.codBarras)">\n                  <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-list>\n\n        <ion-row>\n          <ion-col col-6>Itens: {{totalItens}}</ion-col>\n          <ion-col col-6>Valor: {{valorTotal | currency}}</ion-col>\n        </ion-row>\n\n        <br>\n\n        <button ion-button block type="button" color="primary" round>Confirmar</button>\n\n      </ion-col>  \n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n`/*ion-inline-end:"C:\Users\rodnei.brassoroto\Documents\GitHub\ionic\davisa\src\pages\pedidos\pedidos.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_pedido_service_pedido_service__["a" /* PedidoServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_pedido_service_pedido_service__["a" /* PedidoServiceProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__["a" /* BarcodeScanner */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__providers_produto_service_produto_service__["a" /* ProdutoServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_produto_service_produto_service__["a" /* ProdutoServiceProvider */]) === "function" && _g || Object])
    ], PedidosPage);
    return PedidosPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=pedidos.js.map

/***/ })

});
//# sourceMappingURL=3.js.map