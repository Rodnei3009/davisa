import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ClientesPage } from './../pages/clientes/clientes';
import { ProdutosPage } from './../pages/produtos/produtos';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { ClienteServiceProvider } from '../providers/firebase-service/cliente-service';
import { ProdutoServiceProvider } from './../providers/produto-service/produto-service';
import { PedidoServiceProvider } from './../providers/pedido-service/pedido-service';

import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { SocialSharing } from '@ionic-native/social-sharing';
import { Contacts, Contact } from '@ionic-native/contacts'


const firebaseConfig = {
  apiKey: "AIzaSyBJfyA0HoyDRGspLSWQ8g8oCfJYYg2l6XQ",
  authDomain: "davisa-modaintima.firebaseapp.com",
  databaseURL: "https://davisa-modaintima.firebaseio.com",
  projectId: "davisa-modaintima",
  storageBucket: "davisa-modaintima.appspot.com",
  messagingSenderId: "410435296849"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ClienteServiceProvider,
    ProdutoServiceProvider,
    BarcodeScanner,
    PedidoServiceProvider,
    HttpModule,
    HttpClient,
    HttpClientModule,
    SocialSharing,
    Contact
  ]
})
export class AppModule {}
