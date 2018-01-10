import { Component } from '@angular/core';
import { Loading, LoadingController, IonicPage, NavController, NavParams, ModalController, Modal } from 'ionic-angular';
import { Cliente } from './../../models/cliente.models';
import { Produto } from './../../models/produto.models';
import { PedidoServiceProvider } from './../../providers/pedido-service/pedido-service';
import { ProdutoServiceProvider } from './../../providers/produto-service/produto-service';
import { DateTime } from 'ionic-angular/components/datetime/datetime';
import { Pedido } from './../../models/pedido.models';
import { FirebaseListObservable } from 'angularfire2/database';
import { BarcodeScanner, BarcodeScanResult } from '@ionic-native/barcode-scanner';
import { FirebaseListFactoryOpts } from 'angularfire2/interfaces';

@IonicPage()
@Component({
  selector: 'page-pedidos',
  templateUrl: 'pedidos.html',
})
export class PedidosPage {

  arrayProdutos = [];
  totalItens: number = 0;
  valorTotal: number = 0.00;

  clienteSelecionado: boolean = false;
  dadosCliente: Cliente;
  dadosProduto: Produto;
  nomeCliente: string = "";
  celCliente: string = "";
  dataHora: string = "";
  detalhesPedido: Pedido;

  listaProduto: FirebaseListObservable<any[]>;
  barcodeResult: BarcodeScanResult;
  codBarrasRetorno: string = "";
  strQueryProduto: FirebaseListFactoryOpts;
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public modal: ModalController, 
              public pedido: PedidoServiceProvider,
              public BarcodeScanner: BarcodeScanner,
              public loadingCRTL: LoadingController,
              public produto: ProdutoServiceProvider
            ) {
    this.dadosCliente = this.navParams.data;
  }

  openModalProduto() {
    let val: number = 0;
    let modal = this.modal.create('ModalProdutoPage');
    modal.onDidDismiss(dataProd => {
        // Do things with data coming from modal, for instance :
        console.log(dataProd);
        this.dadosProduto = dataProd;

        if(dataProd != "") {
          
          this.arrayProdutos.push(dataProd);

          this.totalItens = this.arrayProdutos.length;
          this.valorTotal = this.arrayProdutos.reduce(function(prevVal, elem) {
            return prevVal + parseFloat(elem.valVenda);
          }, 0);

        }
    });
    modal.present();
  }
  
  excluirItem(item): void {
    //alert(item);
    let i: number = 0;

    for (i=0;i<this.arrayProdutos.length;i++) {
      //alert(this.arrayProdutos[i].codBarras);
      if (this.arrayProdutos[i].codBarras === item) {
        
        this.arrayProdutos.splice(i, 1)

        this.totalItens = this.arrayProdutos.length;
        this.valorTotal = this.arrayProdutos.reduce(function(prevVal, elem) {
          return prevVal + parseFloat(elem.valVenda);
        }, 0);

      }
    }
    //this.arrayProdutos.splice(item);
  }

  criaPedido(detalhesPedido): void {

    this.pedido.criarPedido(detalhesPedido);

  }

  addProd(prod) {

    alert(prod.codBarras + ' - ' + prod.desc);

    let arrayTam: number = 0;

    arrayTam = this.arrayProdutos.length;

    alert('arrayTam = ' + arrayTam);
    alert('this.arrayProdutos.length = ' + this.arrayProdutos.length);

    this.arrayProdutos.push(prod);

    alert('after push Len = ' + this.arrayProdutos.length);

    if (prod.codBarras != '' && prod.codBarras != undefined && prod.codBarras != "") {
      alert('entrou no if');
      while (arrayTam === this.arrayProdutos.length) {
        arrayTam = this.arrayProdutos.length
        alert(this.arrayProdutos.length);
      }
    }

    this.totalItens = this.arrayProdutos.length;
    this.valorTotal = this.arrayProdutos.reduce(function(prevVal, elem) {
      return prevVal + parseFloat(elem.valVenda);
    }, 0);
  }

  onGetBarcode(): void {
    
    this.BarcodeScanner.scan()
      .then((barcodeResult: BarcodeScanResult) => {
        let loading: Loading = this.showLoading();
        let finalizou: boolean;
        
        this.barcodeResult = barcodeResult;
        this.codBarrasRetorno = this.barcodeResult.text;

        this.strQueryProduto = { query: {orderByChild: 'codBarras', equalTo: this.codBarrasRetorno} };

        this.listaProduto = this.produto.listarProduto(this.strQueryProduto);
        //this.listaProduto.subscribe(produtos => produtos.forEach(produto => this.arrayProdutos.push(produto)));
        this.listaProduto.subscribe(produtos => produtos.forEach(produto => this.addProd(produto)));

        loading.dismiss();

      }).catch((error: Error) => {
        console.log('barcode error: ', error);
      });

  }

  private showLoading(): Loading {
    let loading: Loading = this.loadingCRTL.create({
      //content: 'carregando'
    });
    loading.present();
    return loading;
  }
  
}
