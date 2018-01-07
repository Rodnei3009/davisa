import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelecionaClientePage } from './seleciona-cliente';

@NgModule({
  declarations: [
    SelecionaClientePage,
  ],
  imports: [
    IonicPageModule.forChild(SelecionaClientePage),
  ],
})
export class SelecionaClientePageModule {}
