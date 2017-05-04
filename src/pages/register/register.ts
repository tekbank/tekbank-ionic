import { RegisterDetail } from './../../app/models/register';
import { HomePage } from './../home/home';
import { Subscription } from 'rxjs/Subscription';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from "@angular/forms";

import { Store } from '@ngrx/store';
import * as fromRoot from '../../app/reducers';
import * as auth from './../../app/actions/auth.action';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class Register {
  user = {} as { firstName: string, lastName: string, email: string, phone: string, password?: string, confirmPassword?: string };
  submitted = false;
  subscriptions = [] as Subscription[];

  constructor(
    public navCtrl: NavController,
    private store: Store<fromRoot.State>,
  ) { }

  ionViewDidLoad() {
    console.log('register loaded');
    console.log('register loaded');
    this.checkLogin();
  }
  register(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.store.dispatch(new auth.RegisterAction(this.user as RegisterDetail))
    }
  }
  goToLogin() {
    this.navCtrl.push('Login');
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
