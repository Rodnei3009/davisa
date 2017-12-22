import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';
import { ProdutoServiceProvider } from './../../providers/produto-service/produto-service';
import { Subject } from 'rxjs/Subject';

@IonicPage()
@Component({
  selector: 'page-estoque',
  templateUrl: 'estoque.html',
})
export class EstoquePage {

  listaProdutos: FirebaseListObservable<any[]>;
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
      //alert(strSearch);
      //firebaseDatabase.getReference("parent")
        //.orderByChild("childNode")
        //.startAt("[a-zA-Z0-9]*")
        //.endAt(searchString)
        // [a-zA-Z]{*}[ ][a-zA-Z] 
      this.startAt.next(strSearch.toLowerCase())
      this.endAt.next(strSearch.toLowerCase() + "\uf8ff")
    }
    this.lastKeypress = $event.timeStamp


    /*
    // if the value is an empty string don't filter the items
    if (!strSearch || strSearch.length < 3) {
      return;
    } else {
      alert(strSearch + " - " + strSearch.length);
      //this.listaProdutos = this.ProdutoServiceProvider.listarProduto();
    }
    */
    console.log(strSearch);
  
  }

}
