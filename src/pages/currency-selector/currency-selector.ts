import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';
import { CurrencyService } from '../../app/services/currency.service';
import { Currency } from "../../app/models/index";
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app/reducers';
import * as accounts from './../../app/actions/account.action';

/**
 * Generated class for the CurrencySelectorPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-currency-selector',
  templateUrl: 'currency-selector.html',
})
export class CurrencySelectorPage {

  searchQuery: string = '';
  currencies: Currency[];

  constructor(public navCtrl: NavController, public viewCtrl: ViewController,
  public navParams: NavParams, 
  private currencyService: CurrencyService,
    private store: Store<fromRoot.State>,
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CurrencySelectorPage');
    this.getCurrencies("");
  }
  selectCurrency(currency:Currency){
    console.log('currency selected', currency);
    this.store.dispatch(new accounts.UpdateNewAccountCurrencyAction(currency));
    this.viewCtrl.dismiss();
  }
  getCurrencies(ev: any) {
    if (!ev) ev = {target: {value:""}};

    // set val to the value of the searchbar
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      let searchString = val.trim().toLowerCase();
      this.currencies = this.currencyService.getCurrencies().filter((item) => {
        return (
          item.code.toLowerCase().indexOf(searchString) > -1 ||
          item.name.toLowerCase().indexOf(searchString) > -1
          );
      })
    }
    else {
      this.currencies = this.currencyService.getCurrencies();
    }


  }

}
