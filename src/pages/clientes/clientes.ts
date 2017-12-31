import { ClienteServiceProvider } from './../../providers/firebase-service/cliente-service';
import { Component, OnInit } from '@angular/core';
import { Loading, LoadingController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseListFactoryOpts } from 'angularfire2/interfaces';
//import { LoadingController } from 'ionic-angular/components/loading/loading-controller';


@IonicPage()
@Component({
  selector: 'page-clientes',
  templateUrl: 'clientes.html',
})
export class ClientesPage {

  listaClientes: FirebaseListObservable<any[]>;
  novoCliente = '';
  idCliente = '';
  strQueryCliente: FirebaseListFactoryOpts;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public ClienteServiceProvider: ClienteServiceProvider, 
              public loadingCRTL: LoadingController) {
  
    let loading: Loading = this.showLoading();
    
    this.strQueryCliente = {query: {orderByChild: 'nome'}};

    this.listaClientes = this.ClienteServiceProvider.listarCliente(this.strQueryCliente);    
    this.listaClientes.subscribe(() => loading.dismiss());
  }

  addCliente() {
    this.ClienteServiceProvider.adicionarCliente(this.novoCliente);
  }

  delCliente(idcliente) {
    this.ClienteServiceProvider.deletarCliente(idcliente);
  }
  
  selecionaCliente(cliente) {
    console.log(cliente);
    this.navCtrl.push('NovoClientePage', {dadosCliente: cliente, funcao: 'atualizar'});
  }
  
  novo_Cliente() {
    this.navCtrl.push('NovoClientePage', {dadosCliente: {}, funcao: 'incluir'});
  }

  private showLoading(): Loading {
    let loading: Loading = this.loadingCRTL.create({
      //content: 'carregando'
    });
    loading.present();
    return loading;
  }

}
