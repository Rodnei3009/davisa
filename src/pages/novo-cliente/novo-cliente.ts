import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ClienteServiceProvider } from './../../providers/firebase-service/cliente-service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Cliente } from '../../models/cliente.models';



@IonicPage()
@Component({
  selector: 'page-novo-cliente',
  templateUrl: 'novo-cliente.html',
})
export class NovoClientePage {

  clienteForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public ClienteServiceProvider: ClienteServiceProvider) {
    this.clienteForm = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      celular: ['', Validators.required],
      Sexo: [''],
      prof: [''],
      estcivil: [''],
      aniver: [''],
      CPF: ['', Validators.required],
      RG: ['', Validators.required],
      endereco: ['', Validators.required],
      complemento: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NovoClientePage');
  }

  onSubmit(): void {
    console.log(this.clienteForm.value);
    this.ClienteServiceProvider.adicionarCliente(this.clienteForm.value);
  }

  addCliente() {
    this.ClienteServiceProvider.adicionarCliente(this.novoCliente);
  }

}
