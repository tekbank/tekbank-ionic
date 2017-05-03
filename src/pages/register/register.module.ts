import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Register } from './register';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    Register,
  ],
  imports: [
    IonicPageModule.forChild(Register),
    FlexLayoutModule,
  ],
  exports: [
    Register
  ]
})
export class RegisterModule {}
