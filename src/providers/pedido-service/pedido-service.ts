import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListFactoryOpts } from 'angularfire2/interfaces';

@Injectable()
export class PedidoServiceProvider {

  constructor(public http: HttpClient,
              public afd: AngularFireDatabase) {}

  criarPedido (dadosPedido) {
    this.afd.list('/pedidos/').push(dadosPedido);
  }

  listarCliente (strQuery) {
    return this.afd.list('/pedidos', strQuery);    
  }



  atualizarCliente (idCliente, dadosCliente) {
    this.afd.list('/pedidos/').update(idCliente, dadosCliente);
  }

  deletarCliente (idCliente) {
    this.afd.list('/pedidos/').remove(idCliente);    
  }

  localizarClientePorNome (start, end, equal) {
    return this.afd.list('/pedidos', { query: {orderByChild: 'nome', startAt: start, endAt: end, equalTo: equal} });    
  }

  localizarClientePorCelular (celular) {
    return this.afd.list('/pedidos', { query: {orderByChild: 'celular', equalTo: celular} });
  }

}