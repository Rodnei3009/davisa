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

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public ClienteServiceProvider: ClienteServiceProvider) {
    this.clienteForm = this.formBuilder.group({
      nome: [this.navParams.get('nome'), Validators.required],
      email: [this.navParams.get('email'), Validators.required],
      celular: [this.navParams.get('celular'), Validators.required],
      Sexo: [this.navParams.get('Sexo')],
      prof: [this.navParams.get('prof')],
      estcivil: [this.navParams.get('estcivil')],
      aniver: [this.navParams.get('aniver')],
      CPF: [this.navParams.get('CPF'), Validators.required],
      RG: [this.navParams.get('RG'), Validators.required],
      endereco: [this.navParams.get('endereco'), Validators.required],
      complemento: [this.navParams.get('complemento'), Validators.required]
    });
    this.dadosCliente = this.navParams.get('nome');
    console.log(this.dadosCliente);
  }

  ionViewDidLoad() {
    console.log(this.dadosCliente);
  }

  onSubmit(): void {
    console.log(this.clienteForm.value);
    this.ClienteServiceProvider.adicionarCliente(this.clienteForm.value);
  }

}
