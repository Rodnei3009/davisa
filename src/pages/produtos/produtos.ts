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
  showSpinnerProduto: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ProdutoServiceProvider: ProdutoServiceProvider) {
    console.log(this.showSpinner);
    this.listaProdutos = this.ProdutoServiceProvider.listarProduto();
    this.listaProdutos.subscribe(() => this.showSpinnerProduto = false);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdutosPage');
  }

  novo_Produto() {
    this.navCtrl.push('ProdutoPage', {dadosProduto: {}, funcao: 'incluir'});
  }

  selecionaProduto(produto) {
    console.log(produto);
    this.navCtrl.push('ProdutoPage', {dadosProduto: produto, funcao: 'atualizar'});
  }

  delProduto(codBarras) {
    this.ProdutoServiceProvider.deletarProduto(codBarras);
  }

}
