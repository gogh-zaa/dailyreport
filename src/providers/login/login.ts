import { Injectable , Inject} from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
//import { Header } from 'ionic-angular/es2015/navigation/nav-interfaces';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/Rx';

@Injectable()
export class LoginProvider {
  data: any;


  constructor(public http: Http,@Inject('API_URL') private url: string) {


  }
  /*
 //login php
  doLogin(username, password) {
    var link = 'http://localhost/aaa/login.php';
    var data = JSON.stringify({ username: username, password: password });

    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers
    });

    return new Promise((resolve, reject) => {
      this.http.post(link, data, headers)
        .map(res => res.json())
        .subscribe(data => {
          // this.response = data._body;
          console.log(data);
          resolve(data)

        }, error => {
          console.log("Oooops!");
          reject(error)
        });
    });
  } 
  */
  //login node js
   doLogin(username:string, password:string,date:string) {
   
  console.log("date :"+date);
    return new Promise((resolve,reject)=>{
      let myHeaders = new Headers({ 'Content-Type': 'application/json' });
     
      let options = new RequestOptions({headers:myHeaders});

    let body={username:username,password:password,date:date};
    //console.log("body login :"+body);
    //console.log("header login :"+myHeaders);
      this.http.post(`${this.url}/users/login`,body,options)
      .map(res=>res.json())
      .subscribe(data => {
        resolve(data);
        //console.log(data);
      },error=>{
        reject(error);
      });
    });
  }

  


}
