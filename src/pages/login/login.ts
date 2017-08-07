import { LoginProvider } from './../../providers/login/login';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';

//providers
interface IHttpResult{
  ok:boolean;
  token?:string;
  sta:string;
}

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [LoginProvider]
})
export class LoginPage {
  username: string;
  password: string;
   date;
   day;month;years;day2;
  startDate: String = new Date().toISOString();
 // all day now
  ss2 = new Date().toLocaleDateString();
 //day now
  dd = ("0" + new Date().getDate()).slice(-2).toString();
 //month now
  mm  = ("0" + (new Date().getMonth() + 1)).slice(-2).toString();
 //year now
  yy = new Date().getFullYear().toString();

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loginProvider: LoginProvider,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController) {            
     // console.log("yyyymmdd"+this.yy+this.mm+this.dd);
      this.date = this.yy+this.mm+this.dd;
  }

  //-----------check login
  goHome() {
    //this.navCtrl.setRoot(HomePage);
    console.log(" this.date :"+ this.date);
    
    this.loginProvider.doLogin(this.username, this.password, this.date)
      .then((data: IHttpResult) => {

        if (data.ok) {
            
          let token = data.token;
          let sta   = data.sta;
          localStorage.setItem('token',token);
          localStorage.setItem('sta',sta);
          // redirect to Hpme Page
        
              if(sta === 'A' || sta === 'O' || sta === 'M'){
                  this.navCtrl.setRoot(HomePage);
                  console.log("output :"+data.token);
              }else{
                    let alert = this.alertCtrl.create({
                      title: 'Login Fail ',
                      subTitle: "You don't have access",
                      buttons: ['OK']
                    });
              alert.present();
              }
        } else {
          // console.log("oops");
          let alert = this.alertCtrl.create({
            title: 'Login Fail !',
            subTitle: 'Username or Password Incorrect',
            buttons: ['OK']
          });
          alert.present();
        }
      }, (error) => {

        console.log(error);
      });

  }
  //------------------forgot password
  forgot() {
    let prompt = this.alertCtrl.create({
      title: 'Send Detail Login',
      message: "Enter you e-mail for send detail login ",
      inputs: [
        {
          name: 'E-mail',
          placeholder: 'E-mail'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();

  }

}
