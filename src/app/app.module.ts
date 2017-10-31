import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';

import { DashboardPage } from '../pages/dashboard/dashboard';
import { AddExpensePage } from '../pages/add-expense/add-expense';
import { ListExpensePage } from '../pages/list-expense/list-expense';
import { UpdateExpensePage } from '../pages/update-expense/update-expense';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataProvider } from '../providers/data/data';
import { Chart } from 'chart.js';

@NgModule({
  declarations: [
    MyApp,
    DashboardPage,
    AddExpensePage,
    ListExpensePage,
    UpdateExpensePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DashboardPage,
    AddExpensePage,
    ListExpensePage,
    UpdateExpensePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}
