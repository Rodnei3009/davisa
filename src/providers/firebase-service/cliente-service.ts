import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class ClienteServiceProvider {

  constructor(public afd: AngularFireDatabase) { }

  listarCliente () {
    return this.afd.list('/clientes/');
  }

  adicionarCliente (nome) {
    this.afd.list('/clientes/').push(nome);
  }

  deletarCliente (idCliente) {
    this.afd.list('/clientes/').remove(idCliente);    
  }


}
