webpackJsonp([3],{

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstoquePageModule", function() { return EstoquePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__estoque__ = __webpack_require__(429);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EstoquePageModule = (function () {
    function EstoquePageModule() {
    }
    EstoquePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__estoque__["a" /* EstoquePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__estoque__["a" /* EstoquePage */]),
            ],
        })
    ], EstoquePageModule);
    return EstoquePageModule;
}());

//# sourceMappingURL=estoque.module.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstoquePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_produto_service_produto_service__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EstoquePage = (function () {
    function EstoquePage(navCtrl, navParams, ProdutoServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ProdutoServiceProvider = ProdutoServiceProvider;
        this.startAt = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.endAt = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.lastKeypress = 0;
    }
    EstoquePage.prototype.ngOnInit = function () {
        this.listaProdutos = this.ProdutoServiceProvider.filtrarProduto(this.startAt, this.endAt);
        //this.ProdutoServiceProvider.listarProduto(this.startAt, this.endAt)
        //              .subscribe(listaProdutos => this.listaProdutos)
    };
    EstoquePage.prototype.filtraProdutos = function ($event) {
        var strSearch = $event.target.value;
        if ($event.timeStamp - this.lastKeypress > 200) {
            //alert(strSearch);
            this.startAt.next(strSearch.toLowerCase());
            this.endAt.next(strSearch.toLowerCase() + "\uf8ff");
        }
        this.lastKeypress = $event.timeStamp;
        /*
        // if the value is an empty string don't filter the items
        if (!strSearch || strSearch.length < 3) {
          return;
        } else {
          alert(strSearch + " - " + strSearch.length);
          //this.listaProdutos = this.ProdutoServiceProvider.listarProduto();
        }
        */
        console.log(strSearch);
    };
    EstoquePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-estoque',template:/*ion-inline-start:"C:\Users\rodnei.brassoroto\Documents\GitHub\ionic\davisa\src\pages\estoque\estoque.html"*/`<ion-header>\n\n  <ion-navbar>\n    <ion-title>Estoque</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-searchbar (ionInput)="filtraProdutos($event)"></ion-searchbar>\n  <br>\n  \n    <ion-grid>\n      \n      <ion-row justify-content-center>\n        <ion-col>\n  \n\n          <ion-list>\n            <ion-item *ngFor="let item of listaProdutos | async">\n              <h2> {{ item.desc }} </h2>\n              <h3> Code: <strong>{{ item.marca }}</strong> </h3>\n            </ion-item>\n          </ion-list>\n\n          <!--\n          <ion-list>\n            <ion-item-sliding *ngFor="let item of listaClientes | async">\n              <ion-item (click)="selecionaCliente(item)" detail-push>\n                <ion-icon name="contact" item-left></ion-icon>\n                {{item.nome}}\n                <i class="icon ion-chevron-right"></i>\n              </ion-item>\n              <ion-item-options side="right">\n                <button ion-button color="danger" icon-only (click)="delCliente(item.$key)">\n                    <ion-icon name="trash"></ion-icon>\n                </button>\n              </ion-item-options>\n            </ion-item-sliding>\n          </ion-list>\n        -->\n\n        </ion-col>  \n      </ion-row>\n    </ion-grid>\n\n</ion-content>\n`/*ion-inline-end:"C:\Users\rodnei.brassoroto\Documents\GitHub\ionic\davisa\src\pages\estoque\estoque.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_produto_service_produto_service__["a" /* ProdutoServiceProvider */]])
    ], EstoquePage);
    return EstoquePage;
}());

//# sourceMappingURL=estoque.js.map

/***/ })

});
//# sourceMappingURL=3.js.map