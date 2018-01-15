import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ProdutoServiceProvider } from './../../providers/produto-service/produto-service';
import { FirebaseListFactoryOpts } from 'angularfire2/interfaces';
import { FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PedidoServiceProvider {

  listaProdutos: FirebaseListObservable<any[]>;
  strQueryProduto: FirebaseListFactoryOpts;

  constructor(public http: HttpClient,
              public afd: AngularFireDatabase,
              public ProdutoServiceProvider: ProdutoServiceProvider              
            ) {}

  criarPedido (dadosPedido, dadosProdutos) {

    let i: number;
    let salvou: boolean = false;
    
    this.afd.list('/pedidos/').push(dadosPedido).then((pedido) => {
      //alert(pedido.key);

      for (i=0; i<dadosProdutos.length;i++) {
        //alert(i);
        this.afd.list('/pedidos/' + pedido.key + '/itens/').push(dadosProdutos[i]).then((prodd) => {
//          alert(prodd);
//          alert('aaa');
//          salvou = true;
        });

      }
    });
  }

  baixaEstoque (prod) {

    let qtdAtual, novaQtd: number = 0;
    
    //this.strQueryProduto = { query: {orderByChild: 'codBarras', equalTo: codBarras} };
    //this.listaProdutos = this.ProdutoServiceProvider.listarProduto(this.strQueryProduto);

    
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