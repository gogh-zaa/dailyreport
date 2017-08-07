import { Injectable,Inject } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class ReportVoidProvider {

  constructor(public http: Http,@Inject('API_URL') private url: string) {
    
  }
  

  reporVoid_invoice(token){
        return new Promise((resolve,reject)=>{
      let myHeaders = new Headers({ 'Content-Type': 'application/json',
                                  'x-access-token':token });

     //let myHeaders = new Headers({'x-access-token': token});
      let options = new RequestOptions({headers:myHeaders});
      let body={};
     // console.log("pass token :"+token);
      //console.log({'x-access-token': token});
   
      this.http.post(`${this.url}/void/invoice`,body,options)
      .map(res=>res.json())
      .subscribe(datavoid_invoice => {
        resolve(datavoid_invoice);
        //console.log(data);
      },error=>{
        reject(error);
      });
    });
  }

    reporVoid_item(token){
        return new Promise((resolve,reject)=>{
      let myHeaders = new Headers({ 'Content-Type': 'application/json',
                                  'x-access-token':token });

     //let myHeaders = new Headers({'x-access-token': token});
      let options = new RequestOptions({headers:myHeaders});
      let body={};
     // console.log("pass token :"+token);
      //console.log({'x-access-token': token});
   
      this.http.post(`${this.url}/void/voiditem`,body,options)
      .map(res=>res.json())
      .subscribe(datavoid_item => {
        resolve(datavoid_item);
        //console.log(data);
      },error=>{
        reject(error);
      });
    });
  }

  reporVoid_bill(token){
        return new Promise((resolve,reject)=>{
      let myHeaders = new Headers({ 'Content-Type': 'application/json',
                                  'x-access-token':token });

     //let myHeaders = new Headers({'x-access-token': token});
      let options = new RequestOptions({headers:myHeaders});
      let body={};
     // console.log("pass token :"+token);
      //console.log({'x-access-token': token});
   
      this.http.post(`${this.url}/void/voidbill`,body,options)
      .map(res=>res.json())
      .subscribe(datavoid_bill => {
        resolve(datavoid_bill);
        //console.log(data);
      },error=>{
        reject(error);
      });
    });
  }

  
  

  
}
