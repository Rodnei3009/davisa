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

  adicionarProduto (Produto) {
    this.afd.list('/produtos/').push(Produto);
  }

  atualizarProduto (codBarras, dadosProduto) {
    this.afd.list('/produtos/').update(codBarras, dadosProduto);
  }

  deletarProduto (codBarras) {
    this.afd.list('/produtos/').remove(codBarras);    
  }
 
}