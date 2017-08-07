import { Injectable,Inject } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Report_Top10Provider {

  constructor(public http: Http,@Inject('API_URL') private url: string) {
    
  }

  
  doTest(token){
        return new Promise((resolve,reject)=>{
      let myHeaders = new Headers({ 'Content-Type': 'application/json',
                                  'x-access-token':token });

     
      let options = new RequestOptions({headers:myHeaders});
      
     // console.log("pass token :"+token);
      console.log({'x-access-token': token});
   
      this.http.post(`${this.url}/top10/top10`,options)
      .map(res=>res.json())
      .subscribe(data => {
        resolve(data);
        //console.log(data);
      },error=>{
        reject(error);
      });
    });

  }

    
  reportTop10(token){
        return new Promise((resolve,reject)=>{
      let myHeaders = new Headers({ 'Content-Type': 'application/json',
                                  'x-access-token':token });

     //let myHeaders = new Headers({'x-access-token': token});
      let options = new RequestOptions({headers:myHeaders});
      let body={};
     // console.log("pass token :"+token);
      //console.log({'x-access-token': token});
   
      this.http.post(`${this.url}/top10/top10`,body,options)
      .map(res=>res.json())
      .subscribe(datatop => {
        resolve(datatop);
        //console.log(data);
      },error=>{
        reject(error);
      });
    });

  }

}
