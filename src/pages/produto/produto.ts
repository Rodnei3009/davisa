import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Produto } from './../../models/produto.models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProdutoServiceProvider } from './../../providers/produto-service/produto-service';
import { FirebaseListObservable } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-produto',
  templateUrl: 'produto.html',
})
export class ProdutoPage {
  produtoForm: FormGroup;
  dadosProduto: string;
  funcao: string;
  isAtualizar: boolean = false;
  codBarras: string;
 
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public ProdutoServiceProvider: ProdutoServiceProvider) {
    this.produtoForm = this.formBuilder.group({
      codBarras: [this.navParams.get('dadosProduto').codBarras, Validators.required],
      marca: [this.navParams.get('dadosProduto').marca],
      codigo: [this.navParams.get('dadosProduto').codigo, Validators.required],
      desc: [this.navParams.get('dadosProduto').desc],
      cor: [this.navParams.get('dadosProduto').cor],
      tamanho: [this.navParams.get('dadosProduto').tamanho],
      valCompra: [this.navParams.get('dadosProduto').valCompra],
      valVenda: [this.navParams.get('dadosProduto').valVenda]
    });
    this.dadosProduto = this.navParams.get('dadosProduto');
    this.funcao = this.navParams.get('funcao');
    console.log(this.dadosProduto);
    console.log(this.funcao);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdutoPage');
  }

}
