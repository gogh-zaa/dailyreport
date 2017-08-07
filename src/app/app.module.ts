

import { LogoutPage } from './../pages/logout/logout';
import { DailyReportPage } from './../pages/daily-report/daily-report';
import { HttpModule } from '@angular/http';
import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginProvider } from '../providers/login/login';
import { ChartsHomeProvider } from '../providers/charts-home/charts-home';





@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DailyReportPage,
    LoginPage,
    LogoutPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DailyReportPage,
    LoginPage,
    LogoutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: 'API_URL', useValue: 'http://localhost:3000' },
    LoginProvider,
    ChartsHomeProvider,
    
  ]
})
export class AppModule { }
