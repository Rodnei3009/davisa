import { Component } from '@angular/core';
import { Loading, LoadingController, IonicPage, NavParams, ViewController } from 'ionic-angular';
import { ClienteServiceProvider } from './../../providers/firebase-service/cliente-service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Subject } from 'rxjs/Subject';
import { Cliente } from './../../models/cliente.models';
import { FirebaseListFactoryOpts } from 'angularfire2/interfaces';

@IonicPage()
@Component({
  selector: 'page-modal-cliente',
  templateUrl: 'modal-cliente.html',
})
export class ModalClientePage {

  listaCliente: FirebaseListObservable<any[]>;
  dadosCliente: Cliente;
  clienteCel: string = "";
  clienteNome: string = "";
  startAt = new Subject();
  endAt = new Subject();
  equalTo = new Subject();

  strQuery: FirebaseListFactoryOpts;

  constructor(private navParams: NavParams, private view: ViewController, public cliente: ClienteServiceProvider, public loadingCRTL: LoadingController) {

  }

  closeModal(cliente) {
    this.view.dismiss(cliente);    
  }

  pesquisarPorNome() {
    
    if(this.clienteNome != "") {
        let loading: Loading = this.showLoading();
    
        var nome: string;
        nome = this.clienteNome;
        this.clienteCel = "";
        this.strQuery = { query: {orderByChild: 'nome', startAt: nome, endAt: nome + '\uf8ff'} };
        this.listaCliente = this.cliente.listarCliente(this.strQuery);
        this.listaCliente.subscribe(() => loading.dismiss());
    }
  }
  
  pesquisarPorCel() {

    let loading: Loading = this.showLoading();

    var celular: string;
    celular = this.clienteCel;
    this.clienteNome = "";
    this.strQuery = { query: {orderByChild: 'celular', equalTo: celular} };
    this.listaCliente = this.cliente.listarCliente(this.strQuery);
    this.listaCliente.subscribe(() => loading.dismiss());
  }

  private showLoading(): Loading {
    let loading: Loading = this.loadingCRTL.create({
      //content: 'carregando'
    });
    loading.present();
    return loading;
  }

}
