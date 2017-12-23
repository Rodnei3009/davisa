import { ProdutoServiceProvider } from './../../providers/produto-service/produto-service';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';
import { Subject } from 'rxjs/Subject';

import { BarcodeScanner, BarcodeScanResult } from '@ionic-native/barcode-scanner';

@IonicPage()
@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html',
})
export class ProdutosPage {

  listaProdutos: FirebaseListObservable<any[]>;
  novoProduto = '';
  codBarras = '';
  showSpinnerProduto: boolean = false;
  startAt = new Subject();
  endAt = new Subject();
  equalTo = new Subject();
  lastKeypress: number = 0;
  barcodeResult: BarcodeScanResult;
  codBarrasRetorno: string = '';
  querySearch: string = '';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public ProdutoServiceProvider: ProdutoServiceProvider,
    public BarcodeScanner: BarcodeScanner
  ) {}

  ngOnInit() {
    this.listaProdutos = this.ProdutoServiceProvider.filtrarProduto(this.startAt, this.endAt, "");
    //this.ProdutoServiceProvider.listarProduto(this.startAt, this.endAt)
    //              .subscribe(listaProdutos => this.listaProdutos)
  }

  filtraProdutos($event, barCode) {
    alert('barcode: ' + barCode);
    if (barCode != '') {
      this.equalTo.next(barCode);
    } else {

      var strSearch: string;
      
      if ($event.target.value === undefined) {
        strSearch = "";
      } else {
        strSearch = $event.target.value;
      }
      
      if ($event.timeStamp - this.lastKeypress > 200) {
        this.startAt.next(strSearch.toLowerCase())
        this.endAt.next(strSearch.toLowerCase() + "\uf8ff")
      }
      this.lastKeypress = $event.timeStamp
      console.log(strSearch);

    }
  }

  onGetBarcode(): void {

    this.BarcodeScanner.scan()
      .then((barcodeResult: BarcodeScanResult) => {
        this.barcodeResult = barcodeResult;
        this.codBarrasRetorno = this.barcodeResult.text;
        this.listaProdutos = this.ProdutoServiceProvider.filtrarProduto('', '', this.codBarrasRetorno);
      }).catch((error: Error) => {
        console.log('barcode error: ', error);
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdutosPage');
  }

  localizar_produto() {
    this.onGetBarcode();
    this.listaProdutos = this.ProdutoServiceProvider.localizarProduto(this.codBarrasRetorno);
  }

  novo_Produto() {
    this.navCtrl.push('ProdutoPage', {dadosProduto: {}, funcao: 'incluir'});
  }

  selecionaProduto(produto) {
    console.log(produto);
    this.navCtrl.push('ProdutoPage', {dadosProduto: produto, funcao: 'atualizar'});
  }

  delProduto(codBarras) {
    this.ProdutoServiceProvider.deletarProduto(codBarras);
  }

}
