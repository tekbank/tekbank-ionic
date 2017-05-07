import { Component } from '@angular/core';
import { Accounts } from "../../pages/accounts/accounts";
import { NavController } from "ionic-angular";

import { Store } from '@ngrx/store';
import * as fromRoot from '../../app/reducers';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'nav-buttons',
  templateUrl: 'nav-buttons.html'
})
export class NavButtons {
  isLoggedIn: boolean;
  isLoggedIn$: Observable<boolean>;
  subscriptions = [] as Subscription[];

  text: string;
  accountsPage: Accounts;

  constructor(
    public navCtrl: NavController,
    private store: Store<fromRoot.State>
  ) {
    this.isLoggedIn$ = this.store.select(fromRoot.getAuthIsLoggedIn);
  }

  //todo: investigate why ngonit works but onViewDidLoad doesn't 
  //as per https://forum.ionicframework.com/t/ionviewdidload-in-component/69211
  ngOnInit() {
    this.subscribeToLogin();
  }

  subscribeToLogin() {
    this.subscriptions.push(this.store.select(fromRoot.getAuthIsLoggedIn)
      .subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn)
    );
  }

  goToAccountsPage() {
    if (this.isLoggedIn) {
      this.navCtrl.push('Accounts');
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
