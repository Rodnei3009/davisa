import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Modal } from 'ionic-angular';
import { Cliente } from './../../models/cliente.models';

@IonicPage()
@Component({
  selector: 'page-pedidos',
  templateUrl: 'pedidos.html',
})
export class PedidosPage {

  dadosCliente: Cliente;
  nomeCliente: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public modal: ModalController) {
  }

  openModal() {

    let modal = this.modal.create('ModalClientePage');
    
    modal.onDidDismiss(data => {
        // Do things with data coming from modal, for instance :
        console.log(data);
        this.dadosCliente = data;

        this.nomeCliente = this.dadosCliente.nome;

    });
    
    modal.present();

    //const modalCliente: Modal = this.modal.create('ModalClientePage');
    //modalCliente.present();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PedidosPage');
  }

}
