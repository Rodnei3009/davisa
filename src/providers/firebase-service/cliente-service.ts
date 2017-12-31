import { Cliente } from './../../models/cliente.models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListFactoryOpts } from 'angularfire2/interfaces';

@Injectable()
export class ClienteServiceProvider {

  constructor(public afd: AngularFireDatabase) { }

  showSpinnerCliente: boolean = true;

  listarCliente (strQuery) {
    return this.afd.list('/clientes', strQuery);    
  }

  adicionarCliente (Cliente) {
    this.afd.list('/clientes/').push(Cliente);
  }

  atualizarCliente (idCliente, dadosCliente) {
    this.afd.list('/clientes/').update(idCliente, dadosCliente);
  }

  deletarCliente (idCliente) {
    this.afd.list('/clientes/').remove(idCliente);    
  }

  localizarClientePorNome (start, end, equal) {
    return this.afd.list('/clientes', { query: {orderByChild: 'nome', startAt: start, endAt: end, equalTo: equal} });    
  }

  localizarClientePorCelular (celular) {
    return this.afd.list('/clientes', { query: {orderByChild: 'celular', equalTo: celular} });
  }

}