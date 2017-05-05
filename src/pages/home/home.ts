import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Store } from '@ngrx/store';
import * as fromRoot from '../../app/reducers';
import * as auth from './../../app/actions/auth.action';

import { Observable } from "rxjs/Observable";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  isLoggedIn$: Observable<boolean>;

  constructor(
    public navCtrl: NavController,
    private store: Store<fromRoot.State>) {
    this.isLoggedIn$ = this.store.select(fromRoot.getAuthIsLoggedIn);
  }

  ionViewDidLoad() { }

  goToRegisterPage() {
    this.navCtrl.push('Register');
  }

  goToLoginPage() {
    this.navCtrl.push('Login');
  }

  logOff() {
    this.store.dispatch(new auth.LogoffAction());
  }

}
