import { AuthEffects } from './effects/auth.effects';
import { AccountEffects } from './effects/account.effects';
import './core/rxjs-extensions';

import { NavButtons } from './../components/nav-buttons/nav-buttons';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AuthService } from './services/auth.service';

import { reducer } from './reducers/index';
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
//import { Accounts } from "../pages/accounts/accounts";
import { AccountService } from './services/account.service';
import { CurrencyPipe } from '@angular/common';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NavButtons,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FlexLayoutModule,
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(AuthEffects),
    EffectsModule.run(AccountEffects),
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  exports: [
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthService,
    AccountService ,
    CurrencyPipe
  ]
})
export class AppModule { }
