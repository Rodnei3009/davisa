import { ClienteServiceProvider } from './../../providers/firebase-service/cliente-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';

/**
 * Generated class for the ClientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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

  delCliente() {
    this.ClienteServiceProvider.deletarCliente(this.idCliente);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientesPage');
  }

}
