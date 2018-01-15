import { Component } from '@angular/core';
import { Loading, LoadingController, IonicPage, NavController, NavParams, ModalController, Modal } from 'ionic-angular';
import { Cliente } from './../../models/cliente.models';
import { Produto } from './../../models/produto.models';
import { Pedido } from './../../models/pedido.models';
import { PedidoServiceProvider } from './../../providers/pedido-service/pedido-service';
import { ProdutoServiceProvider } from './../../providers/produto-service/produto-service';
import { DateTime } from 'ionic-angular/components/datetime/datetime';
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

  arrayMeses = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
  arrayDias = ["00","01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
  
  arrayProdutos = [];  
  totalItens: number = 0;
  valorTotal: number = 0.00;

  clienteSelecionado: boolean = false;
  dadosCliente: Cliente;
  dadosProduto: Produto;
  nomeCliente: string = "";
  celCliente: string = "";
  dataHora: string = "";

  listaProduto: FirebaseListObservable<any[]>;
  barcodeResult: BarcodeScanResult;
  codBarrasRetorno: string = "";
  strQueryProduto: FirebaseListFactoryOpts;

  detalhesPedido = new Pedido('','','', 0, 0.00);              

  contactFieldtoSearch: ContactFieldType[] = ["phoneNumbers"];  
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public modal: ModalController, 
              public pedido: PedidoServiceProvider,
              public BarcodeScanner: BarcodeScanner,
              public loadingCRTL: LoadingController,
              public produto: ProdutoServiceProvider,
              public socialSharing: SocialSharing,
              public contatos: Contacts
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

  criaPedido(): void {

    let i:number = 0;
    let strSMS: string = "Obrigado por comprar na Davisa.";
    strSMS = strSMS + "\n";
    strSMS = strSMS + "Detalhes do seu pedido:" + "\n";

    this.detalhesPedido.celCliente = this.dadosCliente.celular;
    this.detalhesPedido.nomCliente = this.dadosCliente.nome;
    this.detalhesPedido.totalItens = this.totalItens;
    this.detalhesPedido.valTotal = this.valorTotal;
    this.detalhesPedido.dataHora = this.criaDataHora();
    //this.detalhesPedido.itens = this.arrayProdutos[];    

    this.pedido.criarPedido(this.detalhesPedido, this.arrayProdutos);

    strSMS = strSMS + "Total de itens: " + + this.totalItens + "\n";
    strSMS = strSMS + "Valor Total: " + this.valorTotal + "\n";
    strSMS = strSMS + "Itens: " + "\n";

    for (i=0;i<this.arrayProdutos.length;i++){
      strSMS = strSMS + this.arrayProdutos[i].desc + " ==> " + this.arrayProdutos[i].valVenda + "\n";
    }
    
    strSMS = strSMS + "Foi um prazer te atender :) ";  

    this.enviarSMS(strSMS, this.dadosCliente.celular)

  }

  criaDataHora() {

    let strDataHora = "";

    let dataHora = new Date();
    /*
    alert(dataHora.getDate());
    alert(this.arrayMeses[dataHora.getMonth()]);
    alert(dataHora.getFullYear());
    alert(dataHora.getHours());
    alert(dataHora.getMinutes());
    */
    strDataHora = this.arrayDias[dataHora.getDate()] + '/' + this.arrayMeses[dataHora.getMonth()] + '/' + dataHora.getFullYear() + ' - ' + dataHora.getHours() + ':' + dataHora.getMinutes();
    return strDataHora;

  }


  addProd(prod) {
    this.arrayProdutos.push(prod);
    //alert(this.arrayProdutos.indexOf(prod.codBarras, 0));
    this.arrayProdutos[this.arrayProdutos.length - 1].qtd_pedido = "1";
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

  enviarSMS(mensagem, celCliente) {
    this.socialSharing.shareViaSMS(mensagem, celCliente).then(() => {
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
    }).catch((err) => {
      alert('erro' + JSON.stringify(err));
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
