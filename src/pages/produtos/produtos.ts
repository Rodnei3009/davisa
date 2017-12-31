import { ProdutoServiceProvider } from './../../providers/produto-service/produto-service';
import { Component, OnInit } from '@angular/core';
import { Loading, LoadingController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';
import { Subject } from 'rxjs/Subject';

import { BarcodeScanner, BarcodeScanResult } from '@ionic-native/barcode-scanner';
import { FirebaseListFactoryOpts } from 'angularfire2/interfaces';

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
  codBarrasRetorno: string = "";
  strQueryProduto: FirebaseListFactoryOpts;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public ProdutoServiceProvider: ProdutoServiceProvider,
    public BarcodeScanner: BarcodeScanner,
    public loadingCRTL: LoadingController
  ) {
    //this.listaProdutos = this.ProdutoServiceProvider.filtrarProduto(this.startAt, this.endAt, this.equalTo);
    //this.listaProdutos = this.ProdutoServiceProvider.filtrarProduto(this.startAt, this.endAt, '');    
  }

  filtraProdutos($event) {

      var strSearch: string;
      
      if ($event.target.value === undefined) {
        strSearch = "";
      } else {
        strSearch = $event.target.value;
      }
      
      if ($event.timeStamp - this.lastKeypress > 200 && strSearch != "") {

        let loading: Loading = this.showLoading();

        this.strQueryProduto = { query: {orderByChild: 'desc_lower', startAt: strSearch.toLowerCase(), endAt: strSearch.toLowerCase() + "\uf8ff"} };
        
        this.listaProdutos = this.ProdutoServiceProvider.listarProduto(this.strQueryProduto);
        this.listaProdutos.subscribe(() => loading.dismiss());

      }
      this.lastKeypress = $event.timeStamp
      console.log(strSearch);

  }

  onGetBarcode(): void {

    this.BarcodeScanner.scan()
      .then((barcodeResult: BarcodeScanResult) => {
        let loading: Loading = this.showLoading();

        this.barcodeResult = barcodeResult;
        this.codBarrasRetorno = this.barcodeResult.text;

        this.strQueryProduto = { query: {orderByChild: 'codBarras', equalTo: this.codBarrasRetorno} };

        this.listaProdutos = this.ProdutoServiceProvider.listarProduto(this.strQueryProduto);
        this.listaProdutos.subscribe(() => loading.dismiss());

      }).catch((error: Error) => {
        console.log('barcode error: ', error);
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdutosPage');
  }

  /*
  localizar_produto() {
    this.onGetBarcode();
    this.listaProdutos = this.ProdutoServiceProvider.localizarProduto(this.codBarrasRetorno);
  }
  */

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

  private showLoading(): Loading {
    let loading: Loading = this.loadingCRTL.create({
      //content: 'carregando'
    });
    loading.present();
    return loading;
  }

}
