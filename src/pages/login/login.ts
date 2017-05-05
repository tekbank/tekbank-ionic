import { HomePage } from './../home/home';
import { LoginDetail } from './../../app/models/login';

import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { NgForm, FormBuilder, Validators, FormGroup } from "@angular/forms";
import { Subscription } from "rxjs/Subscription";

import { Store } from '@ngrx/store';
import * as fromRoot from '../../app/reducers';
import * as auth from './../../app/actions/auth.action';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
  loginForm: FormGroup;
  authMessage$: Observable<string>;
  subscriptions = [] as Subscription[];
  loginDetail = { userName: '', password: '' } as LoginDetail;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    public navCtrl: NavController,
    private store: Store<fromRoot.State>) {
    this.authMessage$ = this.store.select(fromRoot.getAuthMessage);
    this.buildForm();
  }

  ionViewDidLoad() {
    this.subscribeToLogin();
  }

  buildForm() {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    this.store.dispatch(new auth.LoginAction(this.loginForm.value as LoginDetail))
  }

  goToPasswordReset() {
    this.navCtrl.push('PasswordReset');
  }

  subscribeToLogin() {
    this.subscriptions.push(this.store.select(fromRoot.getAuthIsLoggedIn)
      .subscribe(isLoggedIn => {
        if (isLoggedIn) { this.navCtrl.setRoot(HomePage) };
      }));
  }

  ionViewWillUnload() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
