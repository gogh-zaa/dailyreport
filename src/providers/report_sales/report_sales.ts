import { Injectable,Inject } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ReportSalesProvider {

  constructor(public http: Http,@Inject('API_URL') private url: string) {
   
  }
  
  reportSales_ship(token){
        return new Promise((resolve,reject)=>{
      let myHeaders = new Headers({ 'Content-Type': 'application/json',
                                  'x-access-token':token });

     //let myHeaders = new Headers({'x-access-token': token});
      let options = new RequestOptions({headers:myHeaders});
      let body={};
     // console.log("pass token :"+token);
      //console.log({'x-access-token': token});
   
      this.http.post(`${this.url}/sales/ship`,body,options)
      .map(res=>res.json())
      .subscribe(datasales_ship => {
        resolve(datasales_ship);
        //console.log(data);
      },error=>{
        reject(error);
      });
    });

  }

  reportSales_emp(token){
        return new Promise((resolve,reject)=>{
      let myHeaders = new Headers({ 'Content-Type': 'application/json',
                                  'x-access-token':token });

     //let myHeaders = new Headers({'x-access-token': token});
      let options = new RequestOptions({headers:myHeaders});
      let body={};
     // console.log("pass token :"+token);
      //console.log({'x-access-token': token});
   
      this.http.post(`${this.url}/sales/emp`,body,options)
      .map(res=>res.json())
      .subscribe(datasales_emp => {
        resolve(datasales_emp);
        //console.log(data);
      },error=>{
        reject(error);
      });
    });

  }
}
