import { LogoutPage } from '../pages/logout/logout';

import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from './../pages/home/home';
import { LoginPage } from './../pages/login/login';
import { DailyReportPage } from './../pages/daily-report/daily-report';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any ;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    let token = localStorage.getItem('token');
    let sta   = localStorage.getItem('sta');

    if(token){
      if(sta === 'A' || sta === 'O' || sta === 'M'){
          this.rootPage = HomePage;
      }
      
    } 
    else{
      this.rootPage = LoginPage;
    } 
    
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Report', component: DailyReportPage },
      { title: 'Logout', component: LogoutPage} 

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
