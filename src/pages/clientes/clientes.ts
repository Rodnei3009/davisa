import { ClienteServiceProvider } from './../../providers/firebase-service/cliente-service';
import { Component } from '@angular/core';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public ClienteServiceProvider: ClienteServiceProvider) {
    
    this.listaClientes = this.ClienteServiceProvider.listarCliente();
  
  }

  addCliente() {
    this.ClienteServiceProvider.adicionarCliente(this.novoCliente);
  }

  delCliente(idcliente) {
    this.ClienteServiceProvider.deletarCliente(idcliente);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientesPage');
  }

  novo_Cliente() {
    this.navCtrl.push('NovoClientePage');
  }

}
