import { LoginPage } from './../login/login';
import { ChartsHomeProvider } from './../../providers/charts-home/charts-home';
import { Component, ViewChild } from '@angular/core';
import { NavController, LoadingController,AlertController } from 'ionic-angular';
import { Chart } from 'chart.js';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ChartsHomeProvider]
})
export class HomePage {

  @ViewChild('barCanvas') barCanvas;
  @ViewChild('doughnutCanvas') doughnutCanvas;
  @ViewChild('lineCanvas') lineCanvas;

  barChart: any;
  doughnutChart: any;
  lineChart: any;
  token: string;
  summarys:any;
  Discount;Service;Vat;NetAmount;

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public chartsHomeProvider:ChartsHomeProvider,
  
  ) {

  this.token = localStorage.getItem('token'); 
  }

  ionViewDidLoad() {
    this.chartsHomeProvider.chartHomeP1(this.token)
      .then((datachartHome_P1)=>{
        this.chartsHomeProvider.chartHomeP2(this.token)
          .then((datachartHome_P2)=>{             
            this.chartsHomeProvider.chartHomeP3(this.token)
              .then((datachartHome_P3)=>{                
                this.chartsHomeProvider.chartHomeP4(this.token)
                  .then((datachartHome_P4)=>{
                         this.barChart = new Chart(this.barCanvas.nativeElement, {
                                type: 'bar',
                                data: {
                                   labels: [' 8:00-12:00',' 12:01-16:00',' 16:01-20:00',' 20:01-24:00'],
                                  //  labels: ['Period 1','Period 2','Period 3','Period 4'],
                              datasets: [{
                                          label: 'Yesterday ',
                                          data: [datachartHome_P1[0].AmntP1, 
                                                 datachartHome_P2[0].AmntP2, 
                                                 datachartHome_P3[0].AmntP3, 
                                                 datachartHome_P4[0].AmntP4],
                                           backgroundColor: [
                                              'rgba(54, 162, 235, 0.2)',
                                              'rgba(54, 162, 235, 0.2)',
                                              'rgba(54, 162, 235, 0.2)',
                                              'rgba(54, 162, 235, 0.2)',                 
                                            ],
                                            borderColor: [
                                              'rgba(54, 162, 235, 1)',
                                              'rgba(54, 162, 235, 1)',
                                              'rgba(54, 162, 235, 1)',
                                              'rgba(54, 162, 235, 1)',
                                            ],
                                    borderWidth: 1
                                        },
                                        {
                                          label: 'Today',
                                          data: [datachartHome_P1[1].AmntP1, 
                                                 datachartHome_P2[1].AmntP2, 
                                                 datachartHome_P3[1].AmntP3, 
                                                 datachartHome_P4[1].AmntP4],
                                          backgroundColor: [
                                              'rgba(255, 206, 86, 0.2)',
                                              'rgba(255, 206, 86, 0.2)',
                                              'rgba(255, 206, 86, 0.2)',
                                              'rgba(255, 206, 86, 0.2)',                  
                                            ],
                                            borderColor: [
                                              'rgba(255, 206, 86, 1)',
                                              'rgba(255, 206, 86, 1)',
                                              'rgba(255, 206, 86, 1)',
                                              'rgba(255, 206, 86, 1)',                   
                                            ],
                                    borderWidth: 1
                                        }]
                                },
                                options: {
                                  scales: {
                                    yAxes: [{
                                      ticks: {
                                        beginAtZero: true,
                                        stacked:true,
                                      
                                      },
                                    }],
                                    xAxes:[{
                                      // fontSize: 10
                                    }]
                                  }
                                }  
                          });  

                         this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
                                type: 'doughnut',
                                data: {
                                  labels: [ ' 8:00-12:00',' 12:01-16:00',' 16:01-20:00',' 20:01-24:00'],
                                  datasets: [{
                                              label: 'Today',
                                                    data: [datachartHome_P1[1].AmntP1, 
                                                           datachartHome_P2[1].AmntP2, 
                                                           datachartHome_P3[1].AmntP3, 
                                                           datachartHome_P4[1].AmntP4],
                                              backgroundColor: [
                                                'rgba(255, 99, 132, 0.2)',
                                                'rgba(54, 162, 235, 0.2)',
                                                'rgba(255, 206, 86, 0.2)',
                                                'rgba(75, 192, 192, 0.2)',
                                              ],
                                              hoverBackgroundColor: [
                                                "#FF6384",
                                                "#36A2EB",
                                                "#FFCE56",
                                                "#4BC0C0",
                                              ]
                                            }]
                                }
                          });
                },(error)=>{console.log("report fail datachartHome_P4");}); 
            },(error)=>{console.log("report fail datachartHome_P3");}); 
        },(error)=>{console.log("report fail datachartHome_P2");}); 
      },(error)=>{
        console.log("report fail datachartHome_P1");
        ///---Query 403 Token expire  
        let alert = this.alertCtrl.create({
                      title: 'Token Expire ',
                      subTitle: "Please try to login again",
                      buttons: ['OK']
                    });
        alert.present();
        localStorage.removeItem('token');
        localStorage.removeItem('sta');
        this.navCtrl.setRoot(LoginPage);}); 
  }
}