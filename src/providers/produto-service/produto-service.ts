import { Produto } from './../../models/produto.models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ProdutoServiceProvider {

  startAt = new Subject();
  endAt = new Subject();
  equalTo = new Subject();

  constructor(public afd: AngularFireDatabase) { }

  listarProduto (query) {
    return this.afd.list('/produtos', query);
  }

  filtrarProduto (start, end, barcode) {
    //alert('entrou filtrar');    
    if (barcode != '') {
      //alert('AAA');
      return this.afd.list('/produtos', { 
        
        query: {
          orderByChild: 'codBarras',
          equalTo: barcode 
        } 
      
      });
    } else {
      //alert('BBB');
      return this.afd.list('/produtos', { 
        
        query: {
          orderByChild: 'desc_lower',
          startAt: start,
          endAt: end 
        } 
      
      });
    }
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