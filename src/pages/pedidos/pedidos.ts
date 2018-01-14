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
import { SocialSharing } from '@ionic-native/social-sharing';
import { Contacts, Contact, ContactField, ContactFieldType, ContactName } from '@ionic-native/contacts';


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

  contatos: Contacts;
  contactFieldtoSearch: ContactFieldType[] = ["phoneNumbers"];  
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public modal: ModalController, 
              public pedido: PedidoServiceProvider,
              public BarcodeScanner: BarcodeScanner,
              public loadingCRTL: LoadingController,
              public produto: ProdutoServiceProvider,
              public socialSharing: SocialSharing,
              private contacts: Contacts
            ) {
    this.dadosCliente = this.navParams.data;
  }

  openModalProduto() {
    let val: number = 0;
    let modal = this.modal.create('ModalProdutoPage');
    modal.onDidDismiss(dataProd => {
        // Do things with data coming from modal, for instance :
        let loading: Loading = this.showLoading();
        
        this.dadosProduto = dataProd;

        if(dataProd != "") {
          this.addProd(dataProd);
        }
        loading.dismiss();
    });
    modal.present();
  }
  
  excluirItem(item): void {
    let i: number = 0;
    let loading: Loading = this.showLoading();
    
    for (i=0;i<this.arrayProdutos.length;i++) {
      if (this.arrayProdutos[i].codBarras === item) {
        this.arrayProdutos.splice(i, 1)
        this.totalizarPedido();
      }
    }
    loading.dismiss();
  }

  criaPedido(detalhesPedido): void {

    this.pedido.criarPedido(detalhesPedido);

  }

  addProd(prod) {
    this.arrayProdutos.push(prod);
    this.totalizarPedido();
  }

  onGetBarcode(): void {
    
    this.BarcodeScanner.scan()
      .then((barcodeResult: BarcodeScanResult) => {
        let loading: Loading = this.showLoading();
        
        this.barcodeResult = barcodeResult;
        this.codBarrasRetorno = this.barcodeResult.text;

        this.strQueryProduto = { query: {orderByChild: 'codBarras', equalTo: this.codBarrasRetorno} };

        this.listaProduto = this.produto.listarProduto(this.strQueryProduto);
        this.listaProduto.subscribe(produtos => produtos.forEach(produto => this.addProd(produto)));

        loading.dismiss();

      }).catch((error: Error) => {
        console.log('barcode error: ', error);
      });

  }

  totalizarPedido() {
    this.totalItens = this.arrayProdutos.length;
    this.valorTotal = this.arrayProdutos.reduce(function(prevVal, elem) {
      return prevVal + parseFloat(elem.valVenda);
    }, 0);
  }

  private showLoading(): Loading {
    let loading: Loading = this.loadingCRTL.create({
      //content: 'carregando'
    });
    loading.present();
    return loading;
  }

  enviarEmail() {
    this.socialSharing.canShareViaEmail().then(() => {
      alert('Ok para envio do email');
    }).catch(() => {
      alert('Sharing via email is not possible');
      // Sharing via email is not possible
    });
    
    // Share via email
    this.socialSharing.shareViaEmail('Aqui vai o corpo da mensagem', 'Mensagem do app Davisa', ['rodnei.brassoroto@accenture.com']).then(() => {
      alert('email enviado com sucesso');
    }).catch(() => {
      alert('erro ao enviar email');      
    });
  }

  enviarSMS() {
    this.socialSharing.shareViaSMS('Mensagem SMS automática do aplicativo Davisa', '+5511984206847').then(() => {
      alert('SMS com sucesso');
    }).catch(() => {
      alert('SMS com erro');      
    });
  }

  enviarWhats1() {
    this.socialSharing.shareViaWhatsApp('mensagem', '', '').then(() => {
      alert('whats com sucesso');
    }).catch(() => {
      alert('whats com erro');      
    });
  }

  enviarWhats2() {

    let strQuery: string = '02111984888468';

    alert('antes de chamar');
    this.contatos.find(this.contactFieldtoSearch, { filter: strQuery }).then((contacts) => {
      alert(contacts);
    });

    /*
    this.socialSharing.shareViaWhatsAppToReceiver('+5511984888468', 'Davisa', '', '').then(() => {
      alert('whats com sucesso');
    }).catch(() => {
      alert('whats com erro');      
    });
    */
  }

}
