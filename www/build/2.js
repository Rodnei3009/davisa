webpackJsonp([2],{

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoPageModule", function() { return ProdutoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__produto__ = __webpack_require__(442);
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

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdutoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
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





var ProdutoPage = (function () {
    function ProdutoPage(navCtrl, navParams, formBuilder, ProdutoServiceProvider, BarcodeScanner) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.ProdutoServiceProvider = ProdutoServiceProvider;
        this.BarcodeScanner = BarcodeScanner;
        this.isAtualizar = false;
        this.codBarras = "";
        //exemplos FormGroup https://www.concretepage.com/angular-2/angular-2-4-formbuilder-example#set-value
        this.produtoForm = this.formBuilder.group({
            codBarras: [this.navParams.get('dadosProduto').codBarras, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            marca: [this.navParams.get('dadosProduto').marca],
            codigo: [this.navParams.get('dadosProduto').codigo, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            desc: [this.navParams.get('dadosProduto').desc],
            desc_lower: [this.navParams.get('dadosProduto').desc_lower],
            cor: [this.navParams.get('dadosProduto').cor],
            tamanho: [this.navParams.get('dadosProduto').tamanho],
            valCompra: [this.navParams.get('dadosProduto').valCompra],
            valVenda: [this.navParams.get('dadosProduto').valVenda],
            qtd_disp: [this.navParams.get('dadosProduto').qtd_disp]
        });
        this.dadosProduto = this.navParams.get('dadosProduto');
        this.funcao = this.navParams.get('funcao');
        this.descricao = this.navParams.get('dadosProduto').desc;
        this.descricao_lower = this.navParams.get('dadosProduto').desc_lower;
        console.log(this.dadosProduto);
        console.log(this.funcao);
        if (this.funcao === 'atualizar') {
            this.isAtualizar = true;
            this.codBarras = this.navParams.get('dadosProduto').$key;
        }
        else {
            this.isAtualizar = false;
        }
    }
    ProdutoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProdutoPage');
    };
    ProdutoPage.prototype.onSubmit = function () {
        console.log(this.produtoForm.value);
        this.ProdutoServiceProvider.adicionarProduto(this.produtoForm.value);
        this.navCtrl.pop();
    };
    ProdutoPage.prototype.onUpdate = function () {
        console.log(this.produtoForm.value);
        this.ProdutoServiceProvider.atualizarProduto(this.codBarras, this.produtoForm.value);
        this.navCtrl.pop();
    };
    ProdutoPage.prototype.lower = function ($event) {
        if ($event.currentTarget.value != undefined) {
            //alert('qq');
            this.descricao = $event.currentTarget.value;
            this.descricao_lower = this.descricao.toLowerCase();
            //this.teste = this.teste + this.desc;
        }
    };
    ProdutoPage.prototype.onGetBarcode = function () {
        var _this = this;
        this.BarcodeScanner.scan()
            .then(function (barcodeResult) {
            _this.barcodeResult = barcodeResult;
            _this.codBarras = _this.barcodeResult.text;
            //alert('codBarras: ' + this.codBarras);
            //alert('codBarras 2: ' + this.codBarras);
            //alert('antes do patchValue' + this.codBarras);
            _this.produtoForm.patchValue({ 'codBarras': _this.codBarras });
            //alert('get: ' + this.produtoForm.get('codBarras').value);
            //alert('antes do setvalue' + this.codBarras);
            //this.produtoForm.setValue({'codBarras' : this.codBarras});
            //alert('get: ' + this.produtoForm.get('codBarras').value);
            //alert('antes do patchValue sem aspas' + this.codBarras);
            //this.produtoForm.patchValue({codBarras : this.codBarras});
            //alert('get: ' + this.produtoForm.get('codBarras').value);
        }).catch(function (error) {
            console.log('barcode error: ', error);
        });
    };
    ProdutoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-produto',template:/*ion-inline-start:"C:\Users\rodnei.brassoroto\Documents\GitHub\ionic\davisa\src\pages\produto\produto.html"*/`<ion-header>\n  <br>\n  <ion-navbar>\n      <ion-buttons right>\n          <ion-fab right middle>\n            <button ion-fab mini color="primary" (click)="onGetBarcode()">\n              <ion-icon name="camera"></ion-icon>\n            </button>\n          </ion-fab>\n      </ion-buttons>\n    <ion-title>Produto</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n    <ion-row justify-content-center>\n      <ion-col>\n\n        <form [formGroup]="produtoForm" (ngSubmit)="onSubmit(); $event.preventDefault()">\n          \n          <ion-item>\n            <ion-icon name="barcode" item-left></ion-icon>\n            <ion-input type="text" placeholder="Código de barras" formControlName="codBarras"></ion-input>  \n          </ion-item>\n\n          <ion-item>\n            <ion-icon name="shirt" item-left></ion-icon>\n            <ion-input type="text" [(ngModel)]="descricao" placeholder="Produto" formControlName="desc" (input)="lower($event)"></ion-input>\n          </ion-item>\n\n          <div class="hide">\n            <ion-item>\n              <ion-icon name="shirt" item-left></ion-icon>\n              <ion-input type="text" [(ngModel)]="descricao_lower" placeholder="Produto lower" formControlName="desc_lower"></ion-input>\n            </ion-item>\n          </div>\n\n          <ion-item>\n            <ion-icon name="grid" item-left></ion-icon>\n            <ion-input type="text" placeholder="Código" formControlName="codigo"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-icon name="list" item-left></ion-icon>\n            <ion-label>Marca</ion-label>\n            <ion-select interface="action-sheet" placeholder="Marca" formControlName="marca">\n              <ion-option value="DeMillus">DeMillus</ion-option>\n              <ion-option value="Valisere">Valisére</ion-option>\n              <ion-option value="ValFrance">ValFrance</ion-option>\n              <ion-option value="Toque Intimo">Toque Íntimo</ion-option>\n            </ion-select>\n            <!--\n            <ion-icon name="list" item-left></ion-icon>\n            <ion-input type="tel" placeholder="Marca" formControlName="marca"></ion-input>\n            -->  \n          </ion-item>\n\n          <ion-item>\n            <ion-icon name="color-palette" item-left></ion-icon>\n            <ion-input type="text" placeholder="Cor" formControlName="cor"></ion-input>  \n          </ion-item>\n\n          <ion-item>\n            <ion-icon name="expand" item-left></ion-icon>\n            <ion-input type="text" placeholder="Tamanho" formControlName="tamanho"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-icon name="calculator" item-left></ion-icon>\n            <ion-input type="number" placeholder="Valor compra" formControlName="valCompra"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-icon name="calculator" item-left></ion-icon>\n            <ion-input type="number" placeholder="Valor venda" formControlName="valVenda"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-icon name="archive" item-left></ion-icon>\n            <ion-input type="number" placeholder="Quantidade" formControlName="qtd_disp"></ion-input>\n          </ion-item>\n\n          <br>\n          <button ion-button block type="button" [disabled]="produtoForm.invalid" *ngIf="!isAtualizar" color="primary" round (click)="onSubmit()">Salvar</button>\n          <button ion-button block type="button" [disabled]="produtoForm.invalid" *ngIf="isAtualizar" color="danger" round (click)="onUpdate()">Atualizar</button>\n          <!--\n          <button ion-button block type="button" color="primary" round (click)="onGetBarcode()">Código de Barras</button>\n          -->  \n          <!--\n          <div *ngIf="barcodeResult">\n            {{barcodeResult | json}}\n            <div>\n              {{barcodeResult.text}}\n            </div>\n          </div>\n        -->\n\n        </form>\n\n      </ion-col>  \n    </ion-row>\n  </ion-grid>  \n\n</ion-content>`/*ion-inline-end:"C:\Users\rodnei.brassoroto\Documents\GitHub\ionic\davisa\src\pages\produto\produto.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_produto_service_produto_service__["a" /* ProdutoServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_produto_service_produto_service__["a" /* ProdutoServiceProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__["a" /* BarcodeScanner */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]) === "function" && _e || Object])
    ], ProdutoPage);
    return ProdutoPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=produto.js.map

/***/ })

});
//# sourceMappingURL=2.js.map