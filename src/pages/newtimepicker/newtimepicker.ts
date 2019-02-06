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
    // this.showTimePicker();
    this.TimePicker.showTimePicker();
  }


TimePicker={
  showTimePicker:()=>{
    this.timeinstance= this.TimePicker.initTimePicker('','',15,'en');//initialise time picker
    this.timeinstance.unbind('change').change(()=>{
     this.TimePicker.selectedTimeDate();
    });
  },
  selectedTimeDate:()=>{
      let datetime = this.TimePicker.getTimeDate();
      console.log('datetime2: ',datetime);
  },
  setDate:(dateTime)=>{
      let mobitimescroll = (<any>window).mobiScrollTime;
      mobitimescroll.setDate(dateTime);
  },
  initTimePicker:(mintime='',maxtime='',stepMinute=15,langCode='en')=>{
      let mobitimescroll = (<any>window).mobiScrollTime;
      mobitimescroll.destroy();
      return mobitimescroll.init(mintime,maxtime,stepMinute,langCode);
  },
  getTimeDate:()=>{
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
  },
  destroy:()=>{
    let mobitimescroll = (<any>window).mobiScrollTime;
    mobitimescroll.destroy();
  }
}

  addMinutes(minutes) {
    //add minutes to date
    return new Date((new Date()).getTime() + minutes*60000);
}

}
