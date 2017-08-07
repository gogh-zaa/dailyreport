import { Injectable,Inject } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ReportServicechargeProvider {

  constructor(public http: Http,@Inject('API_URL') private url: string) {
    
  }

   reporServiceCharge(token){
        return new Promise((resolve,reject)=>{
      let myHeaders = new Headers({ 'Content-Type': 'application/json',
                                  'x-access-token':token });

     //let myHeaders = new Headers({'x-access-token': token});
      let options = new RequestOptions({headers:myHeaders});
      let body={};
     // console.log("pass token :"+token);
      //console.log({'x-access-token': token});
   
      this.http.post(`${this.url}/serviceCharge/serviceCharge`,body,options)
      .map(res=>res.json())
      .subscribe(dataServiceCharge => {
        resolve(dataServiceCharge);
        //console.log(data);
      },error=>{
        reject(error);
      });
    });

  }

}
