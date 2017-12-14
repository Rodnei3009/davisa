import { ClienteServiceProvider } from './../../providers/firebase-service/cliente-service';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-clientes',
  templateUrl: 'clientes.html',
})
export class ClientesPage {

  listaClientes: FirebaseListObservable<any[]>;
  novoCliente = '';
  idCliente = '';
  showSpinnerCliente: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ClienteServiceProvider: ClienteServiceProvider) {
    
    this.listaClientes = this.ClienteServiceProvider.listarCliente();    
    //this.showSpinnerCliente = false;
    this.listaClientes.subscribe(() => this.showSpinnerCliente = false);
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

}
