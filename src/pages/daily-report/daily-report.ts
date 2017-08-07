import { LoginPage } from './../login/login';
import { ReportSummarySalesProvider } from './../../providers/report-summary-sales/report-summary-sales';
import { ReportComparesalesProvider } from './../../providers/report-comparesales/report-comparesales';
import { ReportVoidProvider } from './../../providers/report-void/report-void';
import { ReportVatProvider } from './../../providers/report-vat/report-vat';
import { ReportOrdertypeProvider } from './../../providers/report-ordertype/report-ordertype';
import { ReportDiscountProvider } from './../../providers/report-discount/report-discount';
import { ReportServicechargeProvider } from './../../providers/report-servicecharge/report-servicecharge';
import { ReportPaymentProvider } from './../../providers/report-payment/report-payment';
import { ReportSalesProvider } from '../../providers/report_sales/report_sales';
import { Report_Top10Provider } from './../../providers/report_top10/report_top10';



import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-daily-report',
  templateUrl: 'daily-report.html',
  providers: [ReportSalesProvider,ReportPaymentProvider,ReportServicechargeProvider,ReportDiscountProvider,
              ReportOrdertypeProvider,ReportVatProvider,ReportVoidProvider,Report_Top10Provider,
              ReportComparesalesProvider,ReportSummarySalesProvider],
              
})
export class DailyReportPage {

  Dish = {
   
}
ModeKeys = [
     {
       "Key": "BTG"
      },
     {
       "Key": "BTG49"
      },
     { 
      "Key": "DCP"
    },
     { 
      "Key": "YMG"
    }
   ]

  token: string;
  sales_ship:any; sales_emp:any;pays:any;service_charges:any;discounts:any;orderTypes:any;
  vats:any;voids_bill:any;top: any;compares:any;summarys:any;

  counts_10:Array<number> = [10]; 
  counts_1:Array<number> = [1]; counts_2:Array<number> = [2]; counts_3:Array<number> = [3]; 
  counts_4:Array<number> = [4]; counts_5:Array<number> = [5]; counts_6:Array<number> = [6]; 
  counts_7:Array<number> = [7]; counts_8:Array<number> = [8]; counts_9:Array<number> = [9];  

 shownGroup = null;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
              public reportsalesProivder: ReportSalesProvider, public reportpaymentProvider:ReportPaymentProvider,
              public reportservicechargeProvider:ReportServicechargeProvider,public reportdiscountProvider:ReportDiscountProvider,
              public reportordertypeProvider:ReportOrdertypeProvider,public reportvatProvider:ReportVatProvider,
              public reportvoidProvider:ReportVoidProvider,public reporttop10Provider: Report_Top10Provider,
              public reportcompareProvider:ReportComparesalesProvider,public reportsummaryProvider:ReportSummarySalesProvider,
            )
  
  {
      this.token = localStorage.getItem('token'); 
         
  }
  
  ionViewDidLoad() {

  }
  ionViewWillEnter(){
    //----SHIP
    this.reportsalesProivder.reportSales_ship(this.token)
      .then((datasales_ship)=>{
         this.sales_ship= datasales_ship;
           //----EMP
          this.reportsalesProivder.reportSales_emp(this.token)
           .then((datasales_emp:any)=>{   
               this.sales_emp= datasales_emp;
                    //----PAYMENT
                    this.reportpaymentProvider.reporPayment(this.token)
                    .then((datapayment)=>{
                      this.pays = datapayment;
                           //----Service Charge
                            this.reportservicechargeProvider.reporServiceCharge(this.token)
                            .then((dataServiceCharge)=>{
                                this.service_charges = dataServiceCharge;
                                //----Discount
                                 this.reportdiscountProvider.reporDiscount(this.token)
                                 .then((datadiscount)=>{
                                    this.discounts = datadiscount;
                                    //----Ordertype
                                    this.reportordertypeProvider.reporOrderType(this.token)
                                    .then((dataorderType)=>{
                                      this.orderTypes = dataorderType;
                                      //----Vat
                                      this.reportvatProvider.reporVat(this.token)
                                      .then((datavat)=>{
                                        this.vats = datavat;
                                        //----Void
                                       //--bill
                                            this.reportvoidProvider.reporVoid_bill(this.token)
                                            .then((datavoid_bill)=>{
                                              this.voids_bill = datavoid_bill;
                                             //TOP 10
                                              this.reporttop10Provider.reportTop10(this.token)
                                                .then((datatop:any)=>{   
                                                this.top= datatop;  
                                                //---Compare
                                                  this.reportcompareProvider.reporCompareSales(this.token)
                                                  .then((datacompareSales)=>{
                                                    this.compares = datacompareSales;
                                                  //---summary
                                                  this.reportsummaryProvider.reporsummarySales(this.token)
                                                  .then((datasummarySales)=>{
                                                    this.summarys = datasummarySales;
                                                  },(error)=>{console.log("report fail summary");});  
                                                },(error)=>{console.log("report fail compare");});         
                                              },error=>{console.log("report fail top 10");});
                                            },(error)=>{console.log("report fail void bill");});
                                      },(error)=>{console.log("report fail vat");});
                                    },(error)=>{console.log("report fail ordertype");});
                                 },(error)=>{console.log("report fail discount");});
                            },(error)=>{console.log("report fail service charge");}) ;   
                    },(error)=>{console.log("report fail payment");});
                },(error)=>{console.log("report fail emp");});
      },(error)=>{
        console.log("report fail ship");
               ///---Query 403 Token expire  
        let alert = this.alertCtrl.create({
                      title: 'Token Expire ',
                      subTitle: "Please try to login again",
                      buttons: ['OK']
                    });
        alert.present();
        localStorage.removeItem('token');
        localStorage.removeItem('sta');
        this.navCtrl.setRoot(LoginPage);
      
      });
  }
 toggleGroup(group) {
   
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
    } else {
        this.shownGroup = group;
    }
};
isGroupShown(group) {
    return this.shownGroup === group;
};



}
