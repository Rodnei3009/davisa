webpackJsonp([0],{

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovoClientePageModule", function() { return NovoClientePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__novo_cliente__ = __webpack_require__(424);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NovoClientePageModule = (function () {
    function NovoClientePageModule() {
    }
    NovoClientePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__novo_cliente__["a" /* NovoClientePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__novo_cliente__["a" /* NovoClientePage */]),
            ],
        })
    ], NovoClientePageModule);
    return NovoClientePageModule;
}());

//# sourceMappingURL=novo-cliente.module.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NovoClientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NovoClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NovoClientePage = (function () {
    function NovoClientePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NovoClientePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NovoClientePage');
    };
    NovoClientePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-novo-cliente',template:/*ion-inline-start:"C:\Users\rodnei.brassoroto\Documents\GitHub\ionic\davisa\src\pages\novo-cliente\novo-cliente.html"*/`<!--\n  Generated template for the ClientesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Novo Cliente</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <form>\n    <ion-item>\n      <ion-icon name="person" item-left></ion-icon>\n      <ion-input type="text" placeholder="Nome"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="at" item-left></ion-icon>\n      <ion-input type="text" placeholder="e-mail"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="phone-portrait" item-left></ion-icon>\n      <ion-input type="tel" placeholder="Celular"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="woman" item-left></ion-icon>\n      <ion-input type="text" placeholder="Sexo"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="woman" item-left></ion-icon>\n      <ion-input type="text" placeholder="Profissão"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="woman" item-left></ion-icon>\n      <ion-input type="text" placeholder="Estado Civil"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="woman" item-left></ion-icon>\n      <ion-input type="text" placeholder="Aniversário"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="woman" item-left></ion-icon>\n      <ion-input type="text" placeholder="CPF"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="woman" item-left></ion-icon>\n      <ion-input type="text" placeholder="RG"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="woman" item-left></ion-icon>\n      <ion-input type="text" placeholder="Endereço"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="woman" item-left></ion-icon>\n      <ion-input type="text" placeholder="Complemento"></ion-input>\n    </ion-item>\n\n  </form>\n\n\n</ion-content>\n    `/*ion-inline-end:"C:\Users\rodnei.brassoroto\Documents\GitHub\ionic\davisa\src\pages\novo-cliente\novo-cliente.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], NovoClientePage);
    return NovoClientePage;
}());

//# sourceMappingURL=novo-cliente.js.map

/***/ })

});
//# sourceMappingURL=0.js.map