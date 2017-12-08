import { Cliente } from './../../models/cliente.models';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ClienteServiceProvider } from './../../providers/firebase-service/cliente-service';
import { FirebaseListObservable } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-novo-cliente',
  templateUrl: 'novo-cliente.html',
})
export class NovoClientePage {

  clienteForm: FormGroup;
  dadosCliente: string;
  funcao: string;
  isAtualizar: boolean = false;
  idCliente: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public ClienteServiceProvider: ClienteServiceProvider) {
    this.clienteForm = this.formBuilder.group({
      nome: [this.navParams.get('dadosCliente').nome, Validators.required],
      email: [this.navParams.get('dadosCliente').email],
      celular: [this.navParams.get('dadosCliente').celular, Validators.required],
      Sexo: [this.navParams.get('dadosCliente').Sexo],
      prof: [this.navParams.get('dadosCliente').prof],
      estcivil: [this.navParams.get('dadosCliente').estcivil],
      aniver: [this.navParams.get('dadosCliente').aniver],
      CPF: [this.navParams.get('dadosCliente').CPF],
      RG: [this.navParams.get('dadosCliente').RG],
      endereco: [this.navParams.get('dadosCliente').endereco],
      complemento: [this.navParams.get('dadosCliente').complemento],
      indicacao: [this.navParams.get('dadosCliente').indicacao]
    });
    this.dadosCliente = this.navParams.get('dadosCliente');
    this.funcao = this.navParams.get('funcao');
    console.log(this.dadosCliente);
    console.log(this.funcao);

    if (this.funcao === 'atualizar') {
      this.isAtualizar = true;
      this.idCliente = this.navParams.get('dadosCliente').$key;
    } else {
      this.isAtualizar = false;
    }

  }

  ionViewDidLoad() {
    console.log(this.dadosCliente);
  }

  onSubmit(): void {
    console.log(this.clienteForm.value);
    this.ClienteServiceProvider.adicionarCliente(this.clienteForm.value);
    this.navCtrl.pop();
  }

  onUpdate(): void {
    console.log(this.clienteForm.value);
    this.ClienteServiceProvider.atualizarCliente(this.idCliente, this.clienteForm.value);
    this.navCtrl.pop();
  }
  

}
