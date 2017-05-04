import { HomePage } from './../home/home';
import { LoginDetail } from './../../app/models/login';

import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { NgForm } from "@angular/forms";

import * as fromRoot from '../../app/reducers';
import * as auth from './../../app/actions/auth.action';
import { Subscription } from "rxjs/Subscription";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
  subscriptions = [] as Subscription[];
  loginDetail = { userName: '', password: '' } as LoginDetail;
  submitted = false;

  constructor(public navCtrl: NavController, private store: Store<fromRoot.State>) { }

  ionViewDidLoad() {
    this.checkLogin();
  }

  login(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      this.store.dispatch(new auth.LoginAction(this.loginDetail as LoginDetail))
    }
  }

  goToPasswordReset() {
    this.navCtrl.push('PasswordReset');
  }

  checkLogin() {
    this.subscriptions.push(this.store.select(fromRoot.getAuthIsLoggedIn)
      .subscribe(isLoggedIn => {
        if (isLoggedIn) { this.navCtrl.setRoot(HomePage) };
      }));
  }

  ionViewWillUnload() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
