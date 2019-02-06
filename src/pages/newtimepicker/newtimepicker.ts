import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewtimepickerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newtimepicker',
  templateUrl: 'newtimepicker.html',
})
export class NewtimepickerPage {
  timeinstance;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.showTimePicker();
  }
  showTimePicker(){
    this.timeinstance= this.initTimePicker('','',1,'en');
    this.timeinstance.unbind('change').change(()=>{
     this.selectedTimeDate();
    });
  }
  addMinutes(minutes) {
    return new Date((new Date()).getTime() + minutes*60000);
}
  setDate(dateTime){
    let mobitimescroll = (<any>window).mobiScrollTime;
    mobitimescroll.setDate(dateTime);
  }
  private selectedTimeDate(){
    let datetime = this.getTimeDate();
    console.log('datetime2: ',datetime);
  }
  private initTimePicker(mintime='',maxtime='',stepMinute=1,langCode='en'){
    let mobitimescroll = (<any>window).mobiScrollTime;
    mobitimescroll.destroy();
    return mobitimescroll.init(mintime,maxtime,stepMinute,langCode);
  }
  private getTimeDate(){
    let mobitimescroll = (<any>window).mobiScrollTime;
    let timeinst =  mobitimescroll.instance('getDate');
    console.log('timeinst: ',timeinst);
    console.log('timeinst toLocaleTimeString: ',timeinst.toLocaleTimeString());
     // let date = moment(dateinst).format('YYYY-MM-DD');
    // console.log('date: ',date);
    // let time = moment(timeinst).format('hh:mm A');
    // console.log('time: ',time);
    // return date+' '+time;

return timeinst;
   
  }
}
