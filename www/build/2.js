webpackJsonp([2],{

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutosPageModule", function() { return ProdutosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__produtos__ = __webpack_require__(446);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProdutosPageModule = (function () {
    function ProdutosPageModule() {
    }
    ProdutosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__produtos__["a" /* ProdutosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__produtos__["a" /* ProdutosPage */]),
            ],
        })
    ], ProdutosPageModule);
    return ProdutosPageModule;
}());

//# sourceMappingURL=produtos.module.js.map

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdutosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_produto_service_produto_service__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
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





var ProdutosPage = (function () {
    function ProdutosPage(navCtrl, navParams, ProdutoServiceProvider, BarcodeScanner, loadingCRTL) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ProdutoServiceProvider = ProdutoServiceProvider;
        this.BarcodeScanner = BarcodeScanner;
        this.loadingCRTL = loadingCRTL;
        this.novoProduto = '';
        this.codBarras = '';
        this.showSpinnerProduto = false;
        this.startAt = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.endAt = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.equalTo = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.lastKeypress = 0;
        this.codBarrasRetorno = "";
        //this.listaProdutos = this.ProdutoServiceProvider.filtrarProduto(this.startAt, this.endAt, this.equalTo);
        //this.listaProdutos = this.ProdutoServiceProvider.filtrarProduto(this.startAt, this.endAt, '');    
    }
    ProdutosPage.prototype.filtraProdutos = function ($event) {
        var strSearch;
        if ($event.target.value === undefined) {
            strSearch = "";
        }
        else {
            strSearch = $event.target.value;
        }
        if ($event.timeStamp - this.lastKeypress > 200 && strSearch != "") {
            var loading_1 = this.showLoading();
            this.strQueryProduto = { query: { orderByChild: 'desc_lower', startAt: strSearch.toLowerCase(), endAt: strSearch.toLowerCase() + "\uf8ff" } };
            this.listaProdutos = this.ProdutoServiceProvider.listarProduto(this.strQueryProduto);
            this.listaProdutos.subscribe(function () { return loading_1.dismiss(); });
        }
        this.lastKeypress = $event.timeStamp;
        console.log(strSearch);
    };
    ProdutosPage.prototype.onGetBarcode = function () {
        var _this = this;
        this.BarcodeScanner.scan()
            .then(function (barcodeResult) {
            var loading = _this.showLoading();
            _this.barcodeResult = barcodeResult;
            _this.codBarrasRetorno = _this.barcodeResult.text;
            _this.strQueryProduto = { query: { orderByChild: 'codBarras', equalTo: _this.codBarrasRetorno } };
            _this.listaProdutos = _this.ProdutoServiceProvider.listarProduto(_this.strQueryProduto);
            _this.listaProdutos.subscribe(function () { return loading.dismiss(); });
        }).catch(function (error) {
            console.log('barcode error: ', error);
        });
    };
    ProdutosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProdutosPage');
    };
    /*
    localizar_produto() {
      this.onGetBarcode();
      this.listaProdutos = this.ProdutoServiceProvider.localizarProduto(this.codBarrasRetorno);
    }
    */
    ProdutosPage.prototype.novo_Produto = function () {
        this.navCtrl.push('ProdutoPage', { dadosProduto: {}, funcao: 'incluir' });
    };
    ProdutosPage.prototype.selecionaProduto = function (produto) {
        console.log(produto);
        this.navCtrl.push('ProdutoPage', { dadosProduto: produto, funcao: 'atualizar' });
    };
    ProdutosPage.prototype.delProduto = function (codBarras) {
        this.ProdutoServiceProvider.deletarProduto(codBarras);
    };
    ProdutosPage.prototype.showLoading = function () {
        var loading = this.loadingCRTL.create({});
        loading.present();
        return loading;
    };
    ProdutosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-produtos',template:/*ion-inline-start:"C:\Users\rodnei.brassoroto\Documents\GitHub\ionic\davisa\src\pages\produtos\produtos.html"*/`<ion-header>\n  <br>\n  <ion-navbar>\n      <ion-buttons right>\n        <button ion-fab mini color="danger" (click)="novo_Produto()">\n          <ion-icon name="add"></ion-icon>\n        </button>\n      </ion-buttons>\n\n      <ion-buttons right>\n        <button ion-fab mini color="primary" (click)="onGetBarcode()">\n          <ion-icon name="barcode"></ion-icon>\n        </button>\n      </ion-buttons>  \n\n    <ion-title>Produtos</ion-title>\n  </ion-navbar>\n  <ion-row col-12>\n    <ion-searchbar placeholder="Pesquisar pelo nome" class="rounded" (ionInput)="filtraProdutos($event)"></ion-searchbar>\n  </ion-row>\n</ion-header>\n\n<ion-content>\n  \n  <ion-grid>\n\n    <ion-row *ngIf="showSpinnerProduto" justify-content-center>\n      <ion-spinner color="primary" name="crescent"></ion-spinner>\n    </ion-row>\n\n    <ion-row *ngIf="!showSpinnerProduto" justify-content-center>\n      \n      <ion-col>\n\n        <!--\n        <ion-spinner name="circles"></ion-spinner>\n        -->\n        <ion-list>\n          <ion-item-sliding *ngFor="let item of listaProdutos | async">\n            \n            <ion-item (click)="selecionaProduto(item)" detail-push>\n              <ion-icon name="shirt" item-left></ion-icon>\n              \n              <ion-row>\n                <ion-col justify-content-start>{{item.desc}}</ion-col>\n              </ion-row>\n              \n              <ion-row>\n                <ion-col class="prod_detail" justify-content-start col-5>Tam: {{ item.tamanho }}</ion-col>\n                <ion-col class="prod_detail" justify-content-end col-3>Cor: {{ item.cor }}</ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col class="prod_detail" justify-content-start col-5>Marca: {{ item.marca }}</ion-col>\n                <ion-col class="prod_detail" justify-content-end col-3>Preço: {{ item.valVenda }}</ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col class="prod_detail" justify-content-start col-5>Disp.: {{ item.qtd_disp }}</ion-col>\n              </ion-row>\n                         \n              \n              <i class="icon ion-chevron-right"></i>\n            </ion-item>\n            \n            <ion-item-options side="right">\n              <button ion-button color="danger" icon-only (click)="delProduto(item.$key)">\n                  <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-list>\n\n        <!--\n        <button ion-button block (click)="novo_Produto()" color="danger">Novo Produto</button>\n        -->  \n\n      </ion-col>  \n    </ion-row>\n  </ion-grid>\n\n</ion-content>`/*ion-inline-end:"C:\Users\rodnei.brassoroto\Documents\GitHub\ionic\davisa\src\pages\produtos\produtos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_produto_service_produto_service__["a" /* ProdutoServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* LoadingController */]])
    ], ProdutosPage);
    return ProdutosPage;
}());

//# sourceMappingURL=produtos.js.map

/***/ })

});
//# sourceMappingURL=2.js.map