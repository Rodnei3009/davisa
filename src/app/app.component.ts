import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ClientesPage } from './../pages/clientes/clientes';
import { ProdutosPage } from './../pages/produtos/produtos';
import { PedidosPage } from './../pages/pedidos/pedidos';
import { SelecionaClientePage } from './../pages/seleciona-cliente/seleciona-cliente';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  @ViewChild(Nav) nav:Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  goClientes () {
    this.nav.push('ClientesPage');
  }

  goProdutos () {
    this.nav.push('ProdutosPage');
  }

  goPedidos () {
    this.nav.push('SelecionaClientePage');
  }
  

}