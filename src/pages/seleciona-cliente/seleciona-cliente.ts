import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Modal } from 'ionic-angular';
import { Cliente } from './../../models/cliente.models';

@IonicPage()
@Component({
  selector: 'page-seleciona-cliente',
  templateUrl: 'seleciona-cliente.html',
})
export class SelecionaClientePage {

  dadosCliente: Cliente;
  nomeCliente: string = "";
  celCliente: string = "";
  prosseguir: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modal: ModalController) {}

  openModalCliente() {
    let modal = this.modal.create('ModalClientePage');
    modal.onDidDismiss(data => {
        // Do things with data coming from modal, for instance :
        console.log(data);
        this.dadosCliente = data;
        this.nomeCliente = this.dadosCliente.nome;
        this.celCliente = this.dadosCliente.celular;

        if (this.celCliente != '' && this.celCliente != undefined) {
          this.prosseguir = true;
        } else {
          this.prosseguir = false;
        }
    });
    modal.present();
  }

  openModalAddCliente() {
    let modal = this.modal.create('NovoClientePage', {dadosCliente: {}, funcao: 'incluirfrompedido'});
    modal.onDidDismiss(data => {
        // Do things with data coming from modal, for instance :
        console.log(data);
        this.dadosCliente = data;
        this.nomeCliente = this.dadosCliente.nome;
        this.celCliente = this.dadosCliente.celular;

        if (this.celCliente != '' && this.celCliente != undefined) {
          this.prosseguir = true;
        } else {
          this.prosseguir = false;
        }
    });
    modal.present();
  }

  goPedidos () {
    this.navCtrl.push('PedidosPage', this.dadosCliente);
  }

}
