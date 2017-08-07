import { Injectable,Inject } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ChartsHomeProvider {

  constructor(public http: Http,@Inject('API_URL') private url: string) {
    console.log('Hello ChartsHomeProvider Provider');
  }

  chartHomeP1(token){
        return new Promise((resolve,reject)=>{
      let myHeaders = new Headers({ 'Content-Type': 'application/json',
                                  'x-access-token':token });

     //let myHeaders = new Headers({'x-access-token': token});
      let options = new RequestOptions({headers:myHeaders});
      let body={};
     // console.log("pass token :"+token);
      //console.log({'x-access-token': token});
   
      this.http.post(`${this.url}/chartHome/Period1`,body,options)
      .map(res=>res.json())
      .subscribe(datachartHome_P1 => {
        resolve(datachartHome_P1);
        //console.log(data);
      },error=>{
        reject(error);
      });
    });
  }

  chartHomeP2(token){
        return new Promise((resolve,reject)=>{
      let myHeaders = new Headers({ 'Content-Type': 'application/json',
                                  'x-access-token':token });

     //let myHeaders = new Headers({'x-access-token': token});
      let options = new RequestOptions({headers:myHeaders});
      let body={};
     // console.log("pass token :"+token);
      //console.log({'x-access-token': token});
   
      this.http.post(`${this.url}/chartHome/Period2`,body,options)
      .map(res=>res.json())
      .subscribe(datachartHome_P2 => {
        resolve(datachartHome_P2);
        //console.log(data);
      },error=>{
        reject(error);
      });
    });
  }
  chartHomeP3(token){
        return new Promise((resolve,reject)=>{
      let myHeaders = new Headers({ 'Content-Type': 'application/json',
                                  'x-access-token':token });

     //let myHeaders = new Headers({'x-access-token': token});
      let options = new RequestOptions({headers:myHeaders});
      let body={};
     // console.log("pass token :"+token);
      //console.log({'x-access-token': token});
   
      this.http.post(`${this.url}/chartHome/Period3`,body,options)
      .map(res=>res.json())
      .subscribe(datachartHome_P3 => {
        resolve(datachartHome_P3);
        //console.log(data);
      },error=>{
        reject(error);
      });
    });

  }
  chartHomeP4(token){
        return new Promise((resolve,reject)=>{
      let myHeaders = new Headers({ 'Content-Type': 'application/json',
                                  'x-access-token':token });

     //let myHeaders = new Headers({'x-access-token': token});
      let options = new RequestOptions({headers:myHeaders});
      let body={};
     // console.log("pass token :"+token);
      //console.log({'x-access-token': token});
   
      this.http.post(`${this.url}/chartHome/Period4`,body,options)
      .map(res=>res.json())
      .subscribe(datachartHome_P4 => {
        resolve(datachartHome_P4);
        //console.log(data);
      },error=>{
        reject(error);
      });
    });

  }

 

}
