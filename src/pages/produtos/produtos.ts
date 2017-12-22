import { ProdutoServiceProvider } from './../../providers/produto-service/produto-service';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';
import { Subject } from 'rxjs/Subject';

@IonicPage()
@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html',
})
export class ProdutosPage {

  listaProdutos: FirebaseListObservable<any[]>;
  novoProduto = '';
  codBarras = '';
  showSpinnerProduto: boolean = false;
  startAt = new Subject();
  endAt = new Subject();
  lastKeypress: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ProdutoServiceProvider: ProdutoServiceProvider) {}

  ngOnInit() {
    this.listaProdutos = this.ProdutoServiceProvider.filtrarProduto(this.startAt, this.endAt);
    //this.ProdutoServiceProvider.listarProduto(this.startAt, this.endAt)
    //              .subscribe(listaProdutos => this.listaProdutos)
  }

  filtraProdutos($event) {
    
    var strSearch: string = $event.target.value;
    
    if ($event.timeStamp - this.lastKeypress > 200) {
      this.startAt.next(strSearch.toLowerCase())
      this.endAt.next(strSearch.toLowerCase() + "\uf8ff")
    }
    this.lastKeypress = $event.timeStamp
    console.log(strSearch);
  
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
