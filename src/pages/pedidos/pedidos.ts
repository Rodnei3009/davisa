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
    let modal = this.modal.create('ModalProdutoPage');
    modal.onDidDismiss(dataProd => {
        // Do things with data coming from modal, for instance :
        console.log(dataProd);
        this.dadosProduto = dataProd;

        if(dataProd != "") {
          
          this.totalItens = this.totalItens + 1;
          this.valorTotal = this.valorTotal + parseFloat(dataProd.valVenda);
          this.arrayProdutos.push(dataProd);

        }

        //this.detalhesPedido.itens.push(dataProd);
        //this.nomeCliente = this.dadosProduto.nome;
    });
    modal.present();
  }
  
  excluirItem(item): void {
    //alert(item);
    let i: number = 0;

    for (i=0;i<this.arrayProdutos.length;i++) {
      //alert(this.arrayProdutos[i].codBarras);
      if (this.arrayProdutos[i].codBarras === item) {
        
        this.totalItens = this.totalItens - 1;
        this.valorTotal = this.valorTotal - parseFloat(this.arrayProdutos[i].valVenda);
        
        this.arrayProdutos.splice(i, 1)
      }
    }
    //this.arrayProdutos.splice(item);
  }

  criaPedido(detalhesPedido): void {

    this.pedido.criarPedido(detalhesPedido);

  }

  onGetBarcode(): void {
    
    this.BarcodeScanner.scan()
      .then((barcodeResult: BarcodeScanResult) => {
        let loading: Loading = this.showLoading();

        this.barcodeResult = barcodeResult;
        this.codBarrasRetorno = this.barcodeResult.text;

        this.strQueryProduto = { query: {orderByChild: 'codBarras', equalTo: this.codBarrasRetorno} };

        this.listaProduto = this.produto.listarProduto(this.strQueryProduto);
        this.listaProduto.subscribe(() => loading.dismiss());

        alert(this.listaProduto);
        //this.dadosProduto = dataProd;
        /*
        if(this.listaProduto.codBarras != "") {
          
          this.totalItens = this.totalItens + 1;
          this.valorTotal = this.valorTotal + parseFloat(this.listaProduto.valVenda);
          this.arrayProdutos.push(this.listaProduto);

        }
        */
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
