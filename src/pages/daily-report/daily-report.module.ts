import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DailyReportPage } from './daily-report';

@NgModule({
  declarations: [
    DailyReportPage,
  ],
  imports: [
    IonicPageModule.forChild(DailyReportPage),
  ],
  exports: [
    DailyReportPage
  ]
})
export class DailyReportPageModule {}
