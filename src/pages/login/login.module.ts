import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Login } from './login';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    Login,
  ],
  imports: [
    IonicPageModule.forChild(Login),
    FlexLayoutModule,
  ],
  exports: [
    Login
  ]
})
export class LoginModule {}
