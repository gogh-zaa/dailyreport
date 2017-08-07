import { Injectable,Inject } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class ReportSummarySalesProvider {

  constructor(public http: Http,@Inject('API_URL') private url: string) {
    
  }

   reporsummarySales(token){
        return new Promise((resolve,reject)=>{
      let myHeaders = new Headers({ 'Content-Type': 'application/json',
                                  'x-access-token':token });

     //let myHeaders = new Headers({'x-access-token': token});
      let options = new RequestOptions({headers:myHeaders});
      let body={};
     // console.log("pass token :"+token);
      //console.log({'x-access-token': token});
   
      this.http.post(`${this.url}/summarySales/summarySales`,body,options)
      .map(res=>res.json())
      .subscribe(datasummarySales => {
        resolve(datasummarySales);
        //console.log(data);
      },error=>{
        reject(error);
      });
    });
  }

  reporsummarySales2(token){
        return new Promise((resolve,reject)=>{
      let myHeaders = new Headers({ 'Content-Type': 'application/json',
                                  'x-access-token':token });

     //let myHeaders = new Headers({'x-access-token': token});
      let options = new RequestOptions({headers:myHeaders});
      let body={};
     // console.log("pass token :"+token);
      //console.log({'x-access-token': token});
   
      this.http.post(`${this.url}/summarySales/summarySales2`,body,options)
      .map(res=>res.json())
      .subscribe(datasummarySales => {
        resolve(datasummarySales);
        //console.log(data);
      },error=>{
        reject(error);
      });
    });
  }

}
