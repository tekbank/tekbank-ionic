import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Register } from './register';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CustomFormsModule } from 'ng2-validation';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Register,
  ],
  imports: [
    IonicPageModule.forChild(Register),
    FlexLayoutModule,
    ReactiveFormsModule,
    CustomFormsModule
  ],
  exports: [
    Register
  ]
})
export class RegisterModule { }
