import { Component } from '@angular/core';
import { Loading, LoadingController, IonicPage, NavParams, ViewController } from 'ionic-angular';
import { ProdutoServiceProvider } from './../../providers/produto-service/produto-service';
import { BarcodeScanner, BarcodeScanResult } from '@ionic-native/barcode-scanner';
import { FirebaseListFactoryOpts } from 'angularfire2/interfaces';
import { FirebaseListObservable } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-modal-produto',
  templateUrl: 'modal-produto.html',
})
export class ModalProdutoPage {

  lastKeypress: number = 0;
  strQueryProduto: FirebaseListFactoryOpts;
  listaProdutos: FirebaseListObservable<any[]>;

  constructor(public navParams: NavParams, 
              private view: ViewController,
              public ProdutoServiceProvider: ProdutoServiceProvider,
              public BarcodeScanner: BarcodeScanner,
              public loadingCRTL: LoadingController) {}

  closeModal(produto) {
    this.view.dismiss(produto);    
  }

  filtraProdutos($event) {
    
    var strSearch: string;
    
    if ($event.target.value === undefined) {
      strSearch = "";
    } else {
      strSearch = $event.target.value;
    }
    
    if ($event.timeStamp - this.lastKeypress > 1000 && strSearch != "" && strSearch.length > 4 ) {

      //alert(strSearch);
      let loading: Loading = this.showLoading();

      this.strQueryProduto = { query: {orderByChild: 'desc_lower', startAt: strSearch.toLowerCase(), endAt: strSearch.toLowerCase() + "\uf8ff"} };
      
      this.listaProdutos = this.ProdutoServiceProvider.listarProduto(this.strQueryProduto);
      this.listaProdutos.subscribe(() => loading.dismiss());

    }
    this.lastKeypress = $event.timeStamp
    console.log(strSearch);
  }

  private showLoading(): Loading {
    let loading: Loading = this.loadingCRTL.create({
      //content: 'carregando'
    });
    loading.present();
    return loading;
  }

}