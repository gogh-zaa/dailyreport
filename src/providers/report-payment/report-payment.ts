import { Injectable,Inject } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class ReportPaymentProvider {

  constructor(public http: Http,@Inject('API_URL') private url: string) {
    console.log('Hello ReportPaymentProvider Provider');
  }

    reporPayment(token){
        return new Promise((resolve,reject)=>{
      let myHeaders = new Headers({ 'Content-Type': 'application/json',
                                  'x-access-token':token });

     //let myHeaders = new Headers({'x-access-token': token});
      let options = new RequestOptions({headers:myHeaders});
      let body={};
     // console.log("pass token :"+token);
      //console.log({'x-access-token': token});
   
      this.http.post(`${this.url}/payment/payment`,body,options)
      .map(res=>res.json())
      .subscribe(datapayment => {
        resolve(datapayment);
        //console.log(data);
      },error=>{
        reject(error);
      });
    });

  }

}
