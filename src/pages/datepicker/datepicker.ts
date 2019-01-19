import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
declare var datepicker:any;
/**
 * Generated class for the DatepickerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-datepicker',
  templateUrl: 'datepicker.html',
})
export class DatepickerPage {
  create_datepicker;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  initializeDatePicker(){
  this.create_datepicker=new Datepickk({
    container: document.getElementById('sampleContainer'),
    inline: true,
    range: true,
    // highlight: [highlight,highlight2]
  });
    this.create_datepicker.setDate = new Date(2015,6,1);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatepickerPage : ');
    this.initializeDatePicker();

  }
  _taskDate(){
    console.log('datepicker: ',this.create_datepicker.selectedDates);
  }
}
