import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewtimepickerPage } from './newtimepicker';

@NgModule({
  declarations: [
    NewtimepickerPage,
  ],
  imports: [
    IonicPageModule.forChild(NewtimepickerPage),
  ],
})
export class NewtimepickerPageModule {}
