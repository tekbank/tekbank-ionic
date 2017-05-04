import { LoginDetail } from './../../app/models/login';

import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { NgForm } from "@angular/forms";

import * as fromRoot from '../../app/reducers';
import * as auth from './../../app/actions/auth.action'; 

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  loginDetail = { userName:'',password:''} as LoginDetail;
  submitted = false;

  constructor(public navCtrl: NavController, private store: Store<fromRoot.State>) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }
  
  login(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.store.dispatch(new auth.LoginAction(this.loginDetail as LoginDetail))
      //this.navCtrl.push('Welcome');
    }
  }

  goToPasswordReset(){
    this.navCtrl.push('PasswordReset');
  }
}
