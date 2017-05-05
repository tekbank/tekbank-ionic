import { RegisterDetail } from './../../app/models/register';
import { HomePage } from './../home/home';
import { Subscription } from 'rxjs/Subscription';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm, FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

import { Store } from '@ngrx/store';
import * as fromRoot from '../../app/reducers';
import * as auth from './../../app/actions/auth.action';
import { CustomValidators } from 'ng2-validation';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class Register {
  registerForm: any;
  user = {} as { firstName: string, lastName: string, email: string, phone: string, password?: string, confirmPassword?: string };
  submitted = false;
  subscriptions = [] as Subscription[];

  constructor(
    private fb: FormBuilder,
    public navCtrl: NavController,
    private store: Store<fromRoot.State>) {
    this.buildForm();
  }

  ionViewDidLoad() {
    this.checkLogin();
  }

  buildForm() {
    // need to make form control seperate to work with validation library
    let password = new FormControl('', Validators.required);
    let confirmPassword = new FormControl('', CustomValidators.equalTo(password));
    let emailValidation = new FormControl('', [Validators.required, CustomValidators.email]);

    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      email: emailValidation,
      password: password,
      confirmPassword: confirmPassword
    });
  }

  register() {
    this.store.dispatch(new auth.RegisterAction(this.registerForm.value as RegisterDetail))
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
