import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Modal } from 'ionic-angular';
import { Cliente } from './../../models/cliente.models';
import { Produto } from './../../models/produto.models';
import { PedidoServiceProvider } from './../../providers/pedido-service/pedido-service';
import { DateTime } from 'ionic-angular/components/datetime/datetime';
import { Pedido } from './../../models/pedido.models';

@IonicPage()
@Component({
  selector: 'page-pedidos',
  templateUrl: 'pedidos.html',
})
export class PedidosPage {

  arrayProdutos = [];
  totalItens: number = 0;
  valorTotal: number = 0.00;

  clienteSelecionado: boolean = false;
  dadosCliente: Cliente;
  dadosProduto: Produto;
  nomeCliente: string = "";
  celCliente: string = "";
  dataHora: string = "";
  detalhesPedido: Pedido;

  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public modal: ModalController, 
              public pedido: PedidoServiceProvider) {
    this.dadosCliente = this.navParams.data;
  }

  openModalProduto() {
    let modal = this.modal.create('ModalProdutoPage');
    modal.onDidDismiss(dataProd => {
        // Do things with data coming from modal, for instance :
        console.log(dataProd);
        this.dadosProduto = dataProd;

        if(dataProd != "") {
          
          this.totalItens = this.totalItens + 1;
          this.valorTotal = this.valorTotal + parseFloat(dataProd.valVenda);
          this.arrayProdutos.push(dataProd);

        }

        //this.detalhesPedido.itens.push(dataProd);
        //this.nomeCliente = this.dadosProduto.nome;
    });
    modal.present();
  }
  
  excluirItem(item): void {
    //alert(item);
    let i: number = 0;

    for (i=0;i<this.arrayProdutos.length;i++) {
      //alert(this.arrayProdutos[i].codBarras);
      if (this.arrayProdutos[i].codBarras === item) {
        
        this.totalItens = this.totalItens - 1;
        this.valorTotal = this.valorTotal - parseFloat(this.arrayProdutos[i].valVenda);
        
        this.arrayProdutos.splice(i, 1)
      }
    }
    //this.arrayProdutos.splice(item);
  }

  criaPedido(detalhesPedido): void {

    this.pedido.criarPedido(detalhesPedido);

  }

}
