import { Produto } from './../../models/produto.models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ProdutoServiceProvider {

  constructor(public afd: AngularFireDatabase) { }

  listarProduto () {
    return this.afd.list('/produtos', { query: {orderByChild: 'desc'} });
  }
 
}