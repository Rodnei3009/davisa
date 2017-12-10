webpackJsonp([0],{

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutosPageModule", function() { return ProdutosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__produtos__ = __webpack_require__(429);
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

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdutosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_produto_service_produto_service__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(75);
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
    function ProdutosPage(navCtrl, navParams, ProdutoServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ProdutoServiceProvider = ProdutoServiceProvider;
        this.novoProduto = '';
        this.codBarras = '';
        this.listaProdutos = this.ProdutoServiceProvider.listarProduto();
        console.log(this.listaProdutos);
    }
    ProdutosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProdutosPage');
    };
    ProdutosPage.prototype.novo_Produto = function () {
        this.navCtrl.push('ProdutoPage');
    };
    ProdutosPage.prototype.selecionaProduto = function (produto) {
        console.log(produto);
        this.navCtrl.push('ProdutoPage', { dadosProduto: produto, funcao: 'atualizar' });
    };
    ProdutosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-produtos',template:/*ion-inline-start:"C:\Users\rodnei.brassoroto\Documents\GitHub\ionic\davisa\src\pages\produtos\produtos.html"*/`<ion-header>\n  <br>\n  <ion-navbar>\n      <ion-buttons right>\n          <ion-fab right middle>\n            <button ion-fab mini color="primary" (click)="novo_Produto()">\n              <ion-icon name="add"></ion-icon>\n            </button>\n          </ion-fab>\n          <!--\n          <button ion-button icon-only (click)="novo_Produto()">\n            <ion-icon name="add-circle"></ion-icon>\n          </button>\n        -->\n      </ion-buttons>\n    <ion-title>Produtos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <br>\n\n  <ion-grid>\n    <ion-row justify-content-center>\n      <ion-col>\n\n        <!--\n        <ion-spinner name="circles"></ion-spinner>\n        -->\n        <ion-list>\n          <ion-item-sliding *ngFor="let item of listaProdutos | async">\n            <ion-item (click)="selecionaProduto(item)" detail-push>\n              <ion-icon name="shirt" item-left></ion-icon>\n              {{item.desc}}\n              <i class="icon ion-chevron-right"></i>\n            </ion-item>\n            <ion-item-options side="right">\n              <button ion-button color="danger" icon-only (click)="delProduto(item.$key)">\n                  <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-list>\n\n        <!--\n        <button ion-button block (click)="novo_Produto()" color="danger">Novo Produto</button>\n        -->  \n\n      </ion-col>  \n    </ion-row>\n  </ion-grid>\n\n</ion-content>`/*ion-inline-end:"C:\Users\rodnei.brassoroto\Documents\GitHub\ionic\davisa\src\pages\produtos\produtos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_produto_service_produto_service__["a" /* ProdutoServiceProvider */]])
    ], ProdutosPage);
    return ProdutosPage;
}());

//# sourceMappingURL=produtos.js.map

/***/ })

});
//# sourceMappingURL=0.js.map