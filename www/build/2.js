webpackJsonp([2],{

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovoClientePageModule", function() { return NovoClientePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__novo_cliente__ = __webpack_require__(430);
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

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NovoClientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_service_cliente_service__ = __webpack_require__(270);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NovoClientePage = (function () {
    function NovoClientePage(navCtrl, navParams, formBuilder, ClienteServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.ClienteServiceProvider = ClienteServiceProvider;
        this.isAtualizar = false;
        this.clienteForm = this.formBuilder.group({
            nome: [this.navParams.get('dadosCliente').nome, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            email: [this.navParams.get('dadosCliente').email],
            celular: [this.navParams.get('dadosCliente').celular, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            Sexo: [this.navParams.get('dadosCliente').Sexo],
            prof: [this.navParams.get('dadosCliente').prof],
            estcivil: [this.navParams.get('dadosCliente').estcivil],
            aniver: [this.navParams.get('dadosCliente').aniver],
            CPF: [this.navParams.get('dadosCliente').CPF],
            RG: [this.navParams.get('dadosCliente').RG],
            endereco: [this.navParams.get('dadosCliente').endereco],
            complemento: [this.navParams.get('dadosCliente').complemento],
            indicacao: [this.navParams.get('dadosCliente').indicacao]
        });
        this.dadosCliente = this.navParams.get('dadosCliente');
        this.funcao = this.navParams.get('funcao');
        console.log(this.dadosCliente);
        console.log(this.funcao);
        if (this.funcao === 'atualizar') {
            this.isAtualizar = true;
            this.idCliente = this.navParams.get('dadosCliente').$key;
        }
        else {
            this.isAtualizar = false;
        }
    }
    NovoClientePage.prototype.ionViewDidLoad = function () {
        console.log(this.dadosCliente);
    };
    NovoClientePage.prototype.onSubmit = function () {
        console.log(this.clienteForm.value);
        this.ClienteServiceProvider.adicionarCliente(this.clienteForm.value);
        this.navCtrl.pop();
    };
    NovoClientePage.prototype.onUpdate = function () {
        console.log(this.clienteForm.value);
        this.ClienteServiceProvider.atualizarCliente(this.idCliente, this.clienteForm.value);
        this.navCtrl.pop();
    };
    NovoClientePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-novo-cliente',template:/*ion-inline-start:"C:\Users\rodnei.brassoroto\Documents\GitHub\ionic\davisa\src\pages\novo-cliente\novo-cliente.html"*/`<!--\n  Generated template for the ClientesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <br>\n  <ion-navbar>\n    <ion-title>Cliente</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <ion-grid>\n      <ion-row justify-content-center>\n        <ion-col>\n\n          <form [formGroup]="clienteForm" (ngSubmit)="onSubmit(); $event.preventDefault()">\n            <ion-item>\n              <ion-icon name="person" item-left></ion-icon>\n              <ion-input type="text" placeholder="Nome" formControlName="nome"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-icon name="at" item-left></ion-icon>\n              <ion-input type="text" placeholder="email" formControlName="email"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-icon name="phone-portrait" item-left></ion-icon>\n              <ion-input type="tel" placeholder="Celular" formControlName="celular"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-icon name="body" item-left></ion-icon>\n              <ion-label>Sexo</ion-label>\n              <ion-select interface="action-sheet" placeholder="Sexo" formControlName="Sexo">\n                <ion-option value="F">Feminino</ion-option>\n                <ion-option value="M">Masculino</ion-option>\n              </ion-select>  \n              <!--  \n              <ion-icon name="body" item-left></ion-icon>\n              <ion-input type="text" placeholder="Sexo" formControlName="Sexo"></ion-input>\n              -->  \n            </ion-item>\n\n            <ion-item>\n              <ion-icon name="construct" item-left></ion-icon>\n              <ion-input type="text" placeholder="Profissão" formControlName="prof"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-icon name="contacts" item-left></ion-icon>\n              <ion-input type="text" placeholder="Estado Civil" formControlName="estcivil"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-icon name="hand" item-left></ion-icon>\n              <ion-input type="text" placeholder="Aniversário" formControlName="aniver"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-icon name="card" item-left></ion-icon>\n              <ion-input type="number" placeholder="CPF" formControlName="CPF"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-icon name="finger-print" item-left></ion-icon>\n              <ion-input type="number" placeholder="RG" formControlName="RG"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-icon name="home" item-left></ion-icon>\n              <ion-input type="text" placeholder="Endereço" formControlName="endereco"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-icon name="infinite" item-left></ion-icon>\n              <ion-input type="text" placeholder="Complemento" formControlName="complemento"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-icon name="information-circle" item-left></ion-icon>\n              <ion-input type="text" placeholder="indicacao" formControlName="indicacao"></ion-input>\n            </ion-item>\n            <br>\n            \n            <button ion-button block type="button" [disabled]="clienteForm.invalid" *ngIf="!isAtualizar" color="primary" round (click)="onSubmit()">Salvar</button>\n            <button ion-button block type="button" [disabled]="clienteForm.invalid" *ngIf="isAtualizar" color="danger" round (click)="onUpdate()">Atualizar</button>\n\n          </form>\n\n        </ion-col>  \n      </ion-row>\n    </ion-grid>\n\n</ion-content>\n    `/*ion-inline-end:"C:\Users\rodnei.brassoroto\Documents\GitHub\ionic\davisa\src\pages\novo-cliente\novo-cliente.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_firebase_service_cliente_service__["a" /* ClienteServiceProvider */]])
    ], NovoClientePage);
    return NovoClientePage;
}());

//# sourceMappingURL=novo-cliente.js.map

/***/ })

});
//# sourceMappingURL=2.js.map