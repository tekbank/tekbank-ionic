import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

import * as fromRoot from '../app/reducers';
import * as auth from './../app/actions/auth.action';
import { Subscription } from 'rxjs/Subscription';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  subscriptions = [] as Subscription[];
  isLoggedIn$: Observable<boolean>;
  rootPage: any = HomePage;
  pages: Array<{ title: string, component: any }>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public menuCtrl: MenuController,
    private store: Store<fromRoot.State>) {
    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.isLoggedIn$ = this.store.select(fromRoot.getAuthIsLoggedIn);
      this.splashScreen.hide();
      this.checkLogin();
    });
  }

  openPage(page: string) {
    //HomePage is not lazy loaded therefore component must be specified
    page === 'Home' ? this.nav.setRoot(HomePage) : this.nav.setRoot(page);
  }

  logOut() {
    this.store.dispatch(new auth.LogoffAction());
  }

  checkLogin() {
    this.subscriptions.push(this.store.select(fromRoot.getAuthIsLoggedIn)
      .subscribe(isLoggedIn => {
        this.menuCtrl.enable(isLoggedIn, 'mainSideMenu');
      }));
  }

  ionViewWillUnload() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
