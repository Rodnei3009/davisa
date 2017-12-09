import { ProdutoServiceProvider } from './../../providers/produto-service/produto-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html',
})
export class ProdutosPage {

  listaProdutos: FirebaseListObservable<any[]>;
  novoProduto = '';
  codBarras = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public ProdutoServiceProvider: ProdutoServiceProvider) {
    this.listaProdutos = this.ProdutoServiceProvider.listarProduto();
    console.log(this.listaProdutos); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdutosPage');
  }

  novo_Produto() {
    this.navCtrl.push('ProdutoPage');
  }

  selecionaProduto(produto) {
    console.log(produto);
    this.navCtrl.push('ProdutoPage', {dadosProduto: produto, funcao: 'atualizar'});
  }

}
