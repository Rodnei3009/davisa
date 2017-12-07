import { Cliente } from './../../models/cliente.models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class ClienteServiceProvider {

  constructor(public afd: AngularFireDatabase) { }

  listarCliente () {
    return this.afd.list('/clientes');
  }

  adicionarCliente (Cliente) {
    this.afd.list('/clientes/').push(Cliente);
  }

  deletarCliente (idCliente) {
    this.afd.list('/clientes/').remove(idCliente);    
  }


}
