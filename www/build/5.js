webpackJsonp([5],{

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalProdutoPageModule", function() { return ModalProdutoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_produto__ = __webpack_require__(439);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalProdutoPageModule = (function () {
    function ModalProdutoPageModule() {
    }
    ModalProdutoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal_produto__["a" /* ModalProdutoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_produto__["a" /* ModalProdutoPage */]),
            ],
        })
    ], ModalProdutoPageModule);
    return ModalProdutoPageModule;
}());

//# sourceMappingURL=modal-produto.module.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalProdutoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_produto_service_produto_service__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModalProdutoPage = (function () {
    function ModalProdutoPage(navParams, view, ProdutoServiceProvider, BarcodeScanner, loadingCRTL) {
        this.navParams = navParams;
        this.view = view;
        this.ProdutoServiceProvider = ProdutoServiceProvider;
        this.BarcodeScanner = BarcodeScanner;
        this.loadingCRTL = loadingCRTL;
        this.lastKeypress = 0;
    }
    ModalProdutoPage.prototype.closeModal = function (produto) {
        this.view.dismiss(produto);
    };
    ModalProdutoPage.prototype.filtraProdutos = function ($event) {
        var strSearch;
        if ($event.target.value === undefined) {
            strSearch = "";
        }
        else {
            strSearch = $event.target.value;
        }
        if ($event.timeStamp - this.lastKeypress > 1000 && strSearch != "" && strSearch.length > 4) {
            //alert(strSearch);
            var loading_1 = this.showLoading();
            this.strQueryProduto = { query: { orderByChild: 'desc_lower', startAt: strSearch.toLowerCase(), endAt: strSearch.toLowerCase() + "\uf8ff" } };
            this.listaProdutos = this.ProdutoServiceProvider.listarProduto(this.strQueryProduto);
            this.listaProdutos.subscribe(function () { return loading_1.dismiss(); });
        }
        this.lastKeypress = $event.timeStamp;
        console.log(strSearch);
    };
    ModalProdutoPage.prototype.showLoading = function () {
        var loading = this.loadingCRTL.create({});
        loading.present();
        return loading;
    };
    ModalProdutoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-produto',template:/*ion-inline-start:"C:\Users\rodnei.brassoroto\Documents\GitHub\ionic\davisa\src\pages\modal-produto\modal-produto.html"*/`<ion-header>\n    <br>\n    <ion-navbar>\n      <ion-buttons right>\n        <button ion-fab mini color="primary" (click)="closeModal(\'\')">\n            <ion-icon name="close"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-title>Pesquisa Produto</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n  \n      <ion-row col-12>\n          <ion-searchbar [(ngModel)]="desc_produto" placeholder="Pesquisar pelo nome" class="rounded" (ionInput)="filtraProdutos($event)"></ion-searchbar>\n          <!--\n          <button ion-button block type="button" color="primary" round (click)="pesquisarPorNome()">Pesquisar por Nome</button>\n          --> \n        </ion-row>\n  \n      <ion-list>\n        <ion-item-sliding *ngFor="let item of listaProdutos | async">\n          <ion-item (click)="closeModal(item)" detail-push>\n\n            {{item.desc}}\n\n            <ion-row>\n              <ion-col class="prod_detail" justify-content-start col-5>Tam: {{ item.tamanho }}</ion-col>\n              <ion-col class="prod_detail" justify-content-end col-3>Cor: {{ item.cor }}</ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col class="prod_detail" justify-content-start col-5>Marca: {{ item.marca }}</ion-col>\n              <ion-col class="prod_detail" justify-content-end col-3>Preço: {{ item.valVenda }}</ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col class="prod_detail" justify-content-start col-5>Disp.: {{ item.qtd_disp }}</ion-col>\n            </ion-row>\n            \n            <i class="icon ion-chevron-right"></i>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n  \n  </ion-content>`/*ion-inline-end:"C:\Users\rodnei.brassoroto\Documents\GitHub\ionic\davisa\src\pages\modal-produto\modal-produto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_produto_service_produto_service__["a" /* ProdutoServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], ModalProdutoPage);
    return ModalProdutoPage;
}());

//# sourceMappingURL=modal-produto.js.map

/***/ })

});
//# sourceMappingURL=5.js.map