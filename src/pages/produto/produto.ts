import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Produto } from './../../models/produto.models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProdutoServiceProvider } from './../../providers/produto-service/produto-service';
import { FirebaseListObservable } from 'angularfire2/database';

import { BarcodeScanner, BarcodeScanResult } from '@ionic-native/barcode-scanner';

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
  codBarras: string = "";
  barcodeResult: BarcodeScanResult;
  descricao_lower: string;
  descricao: string;
  //teste: string = "BL BLA";
 
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public formBuilder: FormBuilder, 
    public ProdutoServiceProvider: ProdutoServiceProvider,
    public BarcodeScanner: BarcodeScanner
  ) {

    //exemplos FormGroup https://www.concretepage.com/angular-2/angular-2-4-formbuilder-example#set-value
    this.produtoForm = this.formBuilder.group({
      codBarras: [this.navParams.get('dadosProduto').codBarras, Validators.required],
      marca: [this.navParams.get('dadosProduto').marca],
      codigo: [this.navParams.get('dadosProduto').codigo, Validators.required],
      desc: [this.navParams.get('dadosProduto').desc],
      desc_lower: [this.navParams.get('dadosProduto').desc_lower],
      cor: [this.navParams.get('dadosProduto').cor],
      tamanho: [this.navParams.get('dadosProduto').tamanho],
      valCompra: [this.navParams.get('dadosProduto').valCompra],
      valVenda: [this.navParams.get('dadosProduto').valVenda]
    });

    this.dadosProduto = this.navParams.get('dadosProduto');
    this.funcao = this.navParams.get('funcao');
    console.log(this.dadosProduto);
    console.log(this.funcao);

    if (this.funcao === 'atualizar') {
      this.isAtualizar = true;
      this.codBarras = this.navParams.get('dadosProduto').$key;
    } else {
      this.isAtualizar = false;
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdutoPage');
  }

  onSubmit(): void {
    console.log(this.produtoForm.value);
    this.ProdutoServiceProvider.adicionarProduto(this.produtoForm.value);
    this.navCtrl.pop();
  }

  onUpdate(): void {
    console.log(this.produtoForm.value);
    this.ProdutoServiceProvider.atualizarProduto(this.codBarras, this.produtoForm.value);
    this.navCtrl.pop();
  }

  lower($event) {
    if ($event.currentTarget.value != undefined) {
      //alert('qq');
      this.descricao = $event.currentTarget.value;
      this.descricao_lower = this.descricao.toLowerCase();
      //this.teste = this.teste + this.desc;
    }
  }

  onGetBarcode(): void {
    this.BarcodeScanner.scan()
      .then((barcodeResult: BarcodeScanResult) => {
        
        this.barcodeResult = barcodeResult;
        this.codBarras = this.barcodeResult.text;
        //alert('codBarras: ' + this.codBarras);
        //alert('codBarras 2: ' + this.codBarras);
        //alert('antes do patchValue' + this.codBarras);
        this.produtoForm.patchValue({'codBarras' : this.codBarras});
        //alert('get: ' + this.produtoForm.get('codBarras').value);
        //alert('antes do setvalue' + this.codBarras);
        //this.produtoForm.setValue({'codBarras' : this.codBarras});
        //alert('get: ' + this.produtoForm.get('codBarras').value);
        //alert('antes do patchValue sem aspas' + this.codBarras);
        //this.produtoForm.patchValue({codBarras : this.codBarras});
        //alert('get: ' + this.produtoForm.get('codBarras').value);
      }).catch((error: Error) => {
        console.log('barcode error: ', error);
      });
  }

}
