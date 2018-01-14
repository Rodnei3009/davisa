webpackJsonp([3],{

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidosPageModule", function() { return PedidosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pedidos__ = __webpack_require__(443);
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

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_pedido_models__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_pedido_service_pedido_service__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_produto_service_produto_service__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_contacts__ = __webpack_require__(277);
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
    function PedidosPage(navCtrl, navParams, modal, pedido, BarcodeScanner, loadingCRTL, produto, socialSharing, contatos) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modal = modal;
        this.pedido = pedido;
        this.BarcodeScanner = BarcodeScanner;
        this.loadingCRTL = loadingCRTL;
        this.produto = produto;
        this.socialSharing = socialSharing;
        this.contatos = contatos;
        this.arrayProdutos = [];
        this.totalItens = 0;
        this.valorTotal = 0.00;
        this.clienteSelecionado = false;
        this.nomeCliente = "";
        this.celCliente = "";
        this.dataHora = "";
        this.codBarrasRetorno = "";
        this.detalhesPedido = new __WEBPACK_IMPORTED_MODULE_2__models_pedido_models__["a" /* Pedido */]('', '', '', 0, 0.00);
        this.contactFieldtoSearch = ["phoneNumbers"];
        this.dadosCliente = this.navParams.data;
    }
    PedidosPage.prototype.openModalProduto = function () {
        var _this = this;
        var val = 0;
        var modal = this.modal.create('ModalProdutoPage');
        modal.onDidDismiss(function (dataProd) {
            // Do things with data coming from modal, for instance :
            var loading = _this.showLoading();
            _this.dadosProduto = dataProd;
            if (dataProd != "") {
                _this.addProd(dataProd);
            }
            loading.dismiss();
        });
        modal.present();
    };
    PedidosPage.prototype.excluirItem = function (item) {
        var i = 0;
        var loading = this.showLoading();
        for (i = 0; i < this.arrayProdutos.length; i++) {
            if (this.arrayProdutos[i].codBarras === item) {
                this.arrayProdutos.splice(i, 1);
                this.totalizarPedido();
            }
        }
        loading.dismiss();
    };
    PedidosPage.prototype.criaPedido = function () {
        this.detalhesPedido.celCliente = this.dadosCliente.celular;
        this.detalhesPedido.nomCliente = this.dadosCliente.nome;
        this.detalhesPedido.totalItens = this.totalItens;
        this.detalhesPedido.valTotal = this.valorTotal;
        this.detalhesPedido.dataHora = '14/01/2018 - 14:00';
        //this.detalhesPedido.itens = this.arrayProdutos[];    
        this.pedido.criarPedido(this.detalhesPedido, this.arrayProdutos);
        this.enviarSMS('Obrigado por comprar na Davisa. Detalhes do seu pedido => Itens:' + this.totalItens + ', Valor: ' + this.valorTotal + ', Detalhes: ' + this.arrayProdutos, this.dadosCliente.celular);
    };
    PedidosPage.prototype.addProd = function (prod) {
        this.arrayProdutos.push(prod);
        this.totalizarPedido();
    };
    PedidosPage.prototype.onGetBarcode = function () {
        var _this = this;
        this.BarcodeScanner.scan()
            .then(function (barcodeResult) {
            var loading = _this.showLoading();
            _this.barcodeResult = barcodeResult;
            _this.codBarrasRetorno = _this.barcodeResult.text;
            _this.strQueryProduto = { query: { orderByChild: 'codBarras', equalTo: _this.codBarrasRetorno } };
            _this.listaProduto = _this.produto.listarProduto(_this.strQueryProduto);
            _this.listaProduto.subscribe(function (produtos) { return produtos.forEach(function (produto) { return _this.addProd(produto); }); });
            loading.dismiss();
        }).catch(function (error) {
            console.log('barcode error: ', error);
        });
    };
    PedidosPage.prototype.totalizarPedido = function () {
        this.totalItens = this.arrayProdutos.length;
        this.valorTotal = this.arrayProdutos.reduce(function (prevVal, elem) {
            return prevVal + parseFloat(elem.valVenda);
        }, 0);
    };
    PedidosPage.prototype.showLoading = function () {
        var loading = this.loadingCRTL.create({});
        loading.present();
        return loading;
    };
    PedidosPage.prototype.enviarEmail = function () {
        this.socialSharing.canShareViaEmail().then(function () {
            alert('Ok para envio do email');
        }).catch(function () {
            alert('Sharing via email is not possible');
            // Sharing via email is not possible
        });
        // Share via email
        this.socialSharing.shareViaEmail('Aqui vai o corpo da mensagem', 'Mensagem do app Davisa', ['rodnei.brassoroto@accenture.com']).then(function () {
            alert('email enviado com sucesso');
        }).catch(function () {
            alert('erro ao enviar email');
        });
    };
    PedidosPage.prototype.enviarSMS = function (mensagem, celCliente) {
        this.socialSharing.shareViaSMS(mensagem, celCliente).then(function () {
            alert('SMS com sucesso');
        }).catch(function () {
            alert('SMS com erro');
        });
    };
    PedidosPage.prototype.enviarWhats1 = function () {
        this.socialSharing.shareViaWhatsApp('mensagem', '', '').then(function () {
            alert('whats com sucesso');
        }).catch(function () {
            alert('whats com erro');
        });
    };
    PedidosPage.prototype.enviarWhats2 = function () {
        var strQuery = '02111984888468';
        alert('antes de chamar');
        this.contatos.find(this.contactFieldtoSearch, { filter: strQuery }).then(function (contacts) {
            alert(contacts);
        }).catch(function (err) {
            alert('erro' + JSON.stringify(err));
        });
        /*
        this.socialSharing.shareViaWhatsAppToReceiver('+5511984888468', 'Davisa', '', '').then(() => {
          alert('whats com sucesso');
        }).catch(() => {
          alert('whats com erro');
        });
        */
    };
    PedidosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pedidos',template:/*ion-inline-start:"C:\Users\rodnei.brassoroto\Documents\GitHub\ionic\davisa\src\pages\pedidos\pedidos.html"*/`<ion-header>\n  <br>\n  <ion-navbar>\n    <ion-title>Novo Pedido</ion-title>\n  </ion-navbar>\n\n  <ion-row>\n    <ion-col>\n      <div class="iconeCli">\n        <ion-icon name="contact"></ion-icon>\n      </div>\n    </ion-col>\n  </ion-row>\n  <ion-row justify-content-center>\n    <div class="nomeCli">\n      {{dadosCliente.nome}}\n    </div>\n  </ion-row>\n\n  <br>\n\n  <ion-row justify-content-center>\n    <div class="nomeCliente">\n      Adicionar itens\n    </div>\n  </ion-row>\n  <ion-row align-items-center>\n      <ion-col col-6>\n        <button ion-fab mini color="primary" (click)="openModalProduto()">\n          <ion-icon name="search"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-fab mini color="primary" (click)="onGetBarcode()">\n          <ion-icon name="barcode"></ion-icon>\n        </button>\n      </ion-col>\n    <!--\n    <button ion-button block type="button" color="primary" round (click)="openModalCliente()">Localizar Cliente</button>\n    -->  \n  </ion-row>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n    \n    <ion-row justify-content-center>\n      <ion-col>\n        \n        <ion-list>\n          <ion-item-sliding *ngFor="let item of arrayProdutos">\n            \n            <ion-item>\n              \n              <ion-row>\n                <ion-col justify-content-start>{{item.desc}}</ion-col>\n              </ion-row>\n              \n              <ion-row>\n                <ion-col class="prod_detail" justify-content-start col-5>Tam: {{ item.tamanho }}</ion-col>\n                <ion-col class="prod_detail" justify-content-end col-3>Cor: {{ item.cor }}</ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col class="prod_detail" justify-content-start col-5>Marca: {{ item.marca }}</ion-col>\n                <ion-col class="prod_detail" justify-content-end col-3>Preço: {{ item.valVenda }}</ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col class="prod_detail" justify-content-start col-5>Disp.: {{ item.qtd_disp }}</ion-col>\n              </ion-row>\n                          \n              \n              <i class="icon ion-chevron-right"></i>\n            </ion-item>\n            \n            <ion-item-options side="right">\n              <button ion-button color="danger" icon-only (click)="excluirItem(item.codBarras)">\n                  <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-list>\n\n        <ion-row>\n          <ion-col col-6>Itens: {{totalItens}}</ion-col>\n          <ion-col col-6>Valor: {{valorTotal | currency}}</ion-col>\n        </ion-row>\n\n        <br>\n\n        <button ion-button block type="button" color="primary" round (click)="criaPedido()">Confirmar</button>\n\n        <br>\n\n        <button ion-fab mini color="primary" (click)="enviarEmail()">\n          <ion-icon name="mail"></ion-icon>\n        </button>\n        <button ion-fab mini color="primary" (click)="enviarSMS()">\n          <ion-icon name="send"></ion-icon>\n        </button>\n        <button ion-fab mini color="primary" (click)="enviarWhats1()">\n          <ion-icon name="whatsapp"></ion-icon>\n        </button>\n        <button ion-fab mini color="danger" (click)="enviarWhats2()">\n          <ion-icon name="whatsapp"></ion-icon>\n        </button>\n\n\n      </ion-col>  \n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n`/*ion-inline-end:"C:\Users\rodnei.brassoroto\Documents\GitHub\ionic\davisa\src\pages\pedidos\pedidos.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_pedido_service_pedido_service__["a" /* PedidoServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_pedido_service_pedido_service__["a" /* PedidoServiceProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__["a" /* BarcodeScanner */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__providers_produto_service_produto_service__["a" /* ProdutoServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_produto_service_produto_service__["a" /* ProdutoServiceProvider */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_7__ionic_native_contacts__["a" /* Contacts */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ionic_native_contacts__["a" /* Contacts */]) === "function" && _j || Object])
    ], PedidosPage);
    return PedidosPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}());

//# sourceMappingURL=pedidos.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pedido; });
var Pedido = (function () {
    function Pedido(celCliente, nomCliente, dataHora, totalItens, valTotal) {
        this.celCliente = celCliente;
        this.nomCliente = nomCliente;
        this.dataHora = dataHora;
        this.totalItens = totalItens;
        this.valTotal = valTotal;
    }
    return Pedido;
}());

//# sourceMappingURL=pedido.models.js.map

/***/ })

});
//# sourceMappingURL=3.js.map