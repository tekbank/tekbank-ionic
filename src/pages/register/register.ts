import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from "@angular/forms";

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class Register {

  user = {} as { firstName: string, lastName: string, email: string, phone: string, password?: string, confirmPassword?: string };
  submitted = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Register');
  }
  register(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      //this.userData.login(this.login.username);
      this.navCtrl.push('Welcome');
    }
  }
  goToLogin() {
    this.navCtrl.push('Login');
  }

}
