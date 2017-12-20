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

import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { ClienteServiceProvider } from '../providers/firebase-service/cliente-service';
import { ProdutoServiceProvider } from './../providers/produto-service/produto-service';

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
    BarcodeScanner
  ]
})
export class AppModule {}
