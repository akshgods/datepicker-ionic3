import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimepickerPage } from './timepicker';

@NgModule({
  declarations: [
    TimepickerPage,
  ],
  imports: [
    IonicPageModule.forChild(TimepickerPage),
  ],
})
export class TimepickerPageModule {}
