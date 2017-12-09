webpackJsonp([1],{

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoPageModule", function() { return ProdutoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__produto__ = __webpack_require__(429);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProdutoPageModule = (function () {
    function ProdutoPageModule() {
    }
    ProdutoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__produto__["a" /* ProdutoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__produto__["a" /* ProdutoPage */]),
            ],
        })
    ], ProdutoPageModule);
    return ProdutoPageModule;
}());

//# sourceMappingURL=produto.module.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdutoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_produto_service_produto_service__ = __webpack_require__(270);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProdutoPage = (function () {
    function ProdutoPage(navCtrl, navParams, formBuilder, ProdutoServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.ProdutoServiceProvider = ProdutoServiceProvider;
        this.isAtualizar = false;
        this.produtoForm = this.formBuilder.group({
            codBarras: [this.navParams.get('dadosProduto').codBarras, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            marca: [this.navParams.get('dadosProduto').marca],
            codigo: [this.navParams.get('dadosProduto').codigo, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            desc: [this.navParams.get('dadosProduto').desc],
            cor: [this.navParams.get('dadosProduto').cor],
            tamanho: [this.navParams.get('dadosProduto').tamanho],
            valCompra: [this.navParams.get('dadosProduto').valCompra],
            valVenda: [this.navParams.get('dadosProduto').valVenda]
        });
        this.dadosProduto = this.navParams.get('dadosProduto');
        this.funcao = this.navParams.get('funcao');
        console.log(this.dadosProduto);
        console.log(this.funcao);
    }
    ProdutoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProdutoPage');
    };
    ProdutoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-produto',template:/*ion-inline-start:"C:\Users\rodnei.brassoroto\Documents\GitHub\ionic\davisa\src\pages\produto\produto.html"*/`<ion-header>\n  <br>\n  <ion-navbar>\n    <ion-title>Produto</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n    <ion-row justify-content-center>\n      <ion-col>\n\n        <form [formGroup]="produtoForm" (ngSubmit)="onSubmit(); $event.preventDefault()">\n          \n          <ion-item>\n            <ion-icon name="person" item-left></ion-icon>\n            <ion-input type="text" placeholder="produto" formControlName="desc"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-icon name="person" item-left></ion-icon>\n            <ion-input type="text" placeholder="código de barras" formControlName="codBarras"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-icon name="at" item-left></ion-icon>\n            <ion-input type="text" placeholder="código" formControlName="codigo"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-icon name="phone-portrait" item-left></ion-icon>\n            <ion-input type="tel" placeholder="marca" formControlName="marca"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-icon name="body" item-left></ion-icon>\n            <ion-label>Cor</ion-label>\n            <ion-select interface="action-sheet" placeholder="cor" formControlName="cor">\n              <ion-option value="A">Amarelo</ion-option>\n              <ion-option value="V">Vermelho</ion-option>\n            </ion-select>  \n            <!--  \n            <ion-icon name="body" item-left></ion-icon>\n            <ion-input type="text" placeholder="Sexo" formControlName="Sexo"></ion-input>\n            -->  \n          </ion-item>\n\n          <ion-item>\n            <ion-icon name="phone-portrait" item-left></ion-icon>\n            <ion-input type="tel" placeholder="valor compra" formControlName="valCompra"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-icon name="phone-portrait" item-left></ion-icon>\n            <ion-input type="tel" placeholder="valor venda" formControlName="valVenda"></ion-input>\n          </ion-item>\n\n          <br>\n          <button ion-button block type="button" [disabled]="produtoForm.invalid" *ngIf="!isAtualizar" color="primary" round (click)="onSubmit()">Salvar</button>\n          <button ion-button block type="button" [disabled]="produtoForm.invalid" *ngIf="isAtualizar" color="danger" round (click)="onUpdate()">Atualizar</button>\n\n        </form>\n\n      </ion-col>  \n    </ion-row>\n  </ion-grid>  \n\n</ion-content>`/*ion-inline-end:"C:\Users\rodnei.brassoroto\Documents\GitHub\ionic\davisa\src\pages\produto\produto.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_produto_service_produto_service__["a" /* ProdutoServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_produto_service_produto_service__["a" /* ProdutoServiceProvider */]) === "function" && _d || Object])
    ], ProdutoPage);
    return ProdutoPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=produto.js.map

/***/ })

});
//# sourceMappingURL=1.js.map