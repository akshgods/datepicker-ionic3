import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import $  from 'jquery-ts';
import * as $ from "jquery";
import * as moment from 'moment';

/**
 * Generated class for the TimepickerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-timepicker',
  templateUrl: 'timepicker.html',
})
export class TimepickerPage {
  storeInfo;
  datetime;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    setTimeout(() => {   
      $(".dwwl1, .dwwl2").addClass('animated fadeInDown');
      $(".dwwl1, .dwwl2").removeClass('hide_con');
     },100);
    console.log('ionViewDidLoad TimepickerPage');
  }

  ionViewWillEnter(){
    $(".dwwl1,.dwwl2").addClass('hide_con'); 
  this.showDateTime();
  }

  showDateTime(){
    // let mobiscroll = (<any>window).mobiscroll;
    
    // this.dataProvider.api_getStoreTiming.subscribe((data)=>{
    //        let apiCall= localStorage.getItem('apiCall');
    //   if(data && apiCall == 'true'){
    //   this.initialMonthYearPicker(data);
    //   }
    // });
    this.initialMonthYearPicker({
      'address': "2 calle 22-74 zona 15 Vista Hermosa II",
      'authorization_date': "2018-02-23",
      'authorization_no': "2018568702914670",
      'authorized_legal_name': "GENBA, SOCIEDAD ANONIMA",
      'authorized_range_max': "1000000",
      'authorized_range_min': "1",
      'case1': "genbagt_2@genba.online, hola@genba.online,alicia@genba.online,nidia@genba.online,zully@genba.online",
      'case2': "genbagt_2@genba.online,hola@genba.online,alicia@genba.online,zully@genba.online",
      'case3': "genbagt_2@genba.online, hola@genba.online,alicia@genba.online,zully@genba.online",
      'case4': " genbagt_2@genba.online,hola@genba.online,alicia@genba.online,zully@genba.online,kristel@genba.online",
      'case5': "genbagt_2@genba.online,hola@genba.online,alicia@genba.online,zully@genba.online,kristel@genba.online",
      'case6': "genbagt_2@genba.online,hola@genba.online,alicia@genba.online,zully@genba.online,kristel@genba.online",
      'case7': "jonathan@panifresh.com,nidia@panifresh.com,eddy@panifresh.com,alicia@genba.online",
      'case8': "eddy@panifresh.com",
      'case9': "eddy@panifresh.com",
      'country': "GT",
      'dept_or_province': "Guatemala",
      'face_code_establishment': "2",
      'franchise_id': "1",
      'id': "2",
      'invoice_no': "440",
      'nce_code_establishment': "2",
      'nce_date': "2018-02-23",
      'nce_max': "1000000",
      'nce_min': "1",
      'nce_no': "2018568702914671",
      'nce_order_no': "4",
      'nce_series': "CD2A",
      'nit_or_vat_num': "93817290",
      'series': "CD2A",
      'store_active_promos_id': "null",
      'store_address': " 2 calle 22-74 zona 15 Vista Hermosa II",
      'store_city': "Guatemala",
      'store_city_code': "01015",
      'store_closed_time_msg': "1|Apagamos el horno por hoy un ratito.  ¡Volveremos pronto!,↵5|We are closing our ovens for today, we will be back soon! ",
      'store_country_id': "1",
      'store_delivery_areas_ID': "52,54,56,58,65,67,70,102,103,105,111",
      'store_delivery_man_commission': "0.1",
      'store_delivery_man_id': "5628,9414,666,11055,13153,13155,13827,16916,12362,17921,18915,19326,13156,6630,25537,26515,26693,26694,26712,26695,28293,29151",
      'store_email': "genbagt_2@genba.online",
      'store_emergency_closed_msg': "1|Apagamos el horno por hoy un ratito.  ¡Volveremos pronto!,5|We are closing our ovens for today, we will be back soon! ",
      'store_fri_close_time': "19:00:00",
      'store_fri_open_time': "07:00:00",
      'store_last_replenishment': "0000-00-00 00:00:00",
      'store_last_wasted_date': "2018-12-03 23:39:32",
      'store_last_wasted_msg': "salida cumpleañ",
      'store_lat': "14.583687",
      'store_local_pickup': "Yes",
      'store_long': "-90.487030",
      'store_managers_id': "6347,1123,6486,12709,25987",
      'store_minimum_access_level_role': "null",
      'store_mon_close_time': "19:00:00",
      'store_mon_open_time': "07:00:00",
      'store_municipio': "Guatemala",
      'store_name': "Genba2",
      'store_operators_id': "18145",
      'store_orders': "null",
      'store_phone': "48982047",
      'store_phone_area': "502",
      'store_pre_closed_min': "15",
      'store_preorder_max_days': "3",
      'store_products': "null",
      'store_rec_orders_count': "null",
      'store_sap_id': "2",
      'store_sat_close_time': "19:00:00",
      'store_sat_open_time': "07:00:00",
      'store_status': "Active",
      'store_sun_close_time': "19:00:00",
      'store_sun_open_time': "07:00:00",
      'store_support_id': "18144",
      'store_thu_close_time': "19:00:00",
      'store_thu_open_time': "07:00:00",
      'store_tue_close_time': "19:00:00",
      'store_tue_open_time': "07:00:00",
      'store_wasted_products': "161,162,163,167,168,169,170,171,172,173,176,177,179,181,182,183,185,201,202,204,205,207,210,211,214,215,218,219,221,224,226,232,233,234,235,236,237,238,243,244,247,250,253,259,261,265,266,271,272,275,277,278,279,282,286,289,290,294,295,306,307,312,313,315,317,319,324,326,328,330,331,332,334,337,338,340,342,346,348,349,354,355,356,358,365,367,368,369,371,372,378,379,381,383,384,388,390,393,394,397,399,400,401,402,405,407,409,412,413,414,418,420,421,424,426,427,429,430,432",
      'store_wed_close_time': "19:00:00",
      'store_wed_open_time': "07:00:00",
      'store_wkly_replenished': "Yes"});
  }

  getselectday(selected_store_timing:any,day:any)
  {
    switch(day) {
      case 0:
          var open_time = selected_store_timing['store_info'].store_sun_open_time;
          var close_time = selected_store_timing['store_info'].store_sun_close_time;
          break;
      case 1:
          var open_time = selected_store_timing['store_info'].store_mon_open_time;
          var close_time = selected_store_timing['store_info'].store_mon_close_time;
          break;
      case 2:
          var open_time = selected_store_timing['store_info'].store_tue_open_time;
          var close_time = selected_store_timing['store_info'].store_tue_close_time;
          break;
      case 3:
          var open_time = selected_store_timing['store_info'].store_wed_open_time;
          var close_time = selected_store_timing['store_info'].store_wed_close_time;
          break;
      case 4:
          var open_time = selected_store_timing['store_info'].store_thu_open_time;
          var close_time = selected_store_timing['store_info'].store_thu_close_time;
          break;
      case 5:
          var open_time = selected_store_timing['store_info'].store_fri_open_time;
          var close_time = selected_store_timing['store_info'].store_fri_close_time;
          break;
      case 6:
          var open_time = selected_store_timing['store_info'].store_sat_open_time;
          var close_time = selected_store_timing['store_info'].store_sat_close_time;
          break;
    }
    var opencloseobj = {"open_time":open_time,"close_time":close_time};
    return opencloseobj;
  }

  initialMonthYearPicker(selected_store_timing){
    selected_store_timing['store_info']=selected_store_timing;
    this.storeInfo=selected_store_timing;
    console.log('selected_store_timing: ',selected_store_timing);
    // datetime ganesh
    var langCode="EN";
    // var zonetime = localStorage.getItem("selected_order_address_id_delivery_zone_time");
    var zonetime = "45";
    var maxPreorderDay = selected_store_timing['store_info'].store_preorder_max_days;
    var store_pre_closed_min = parseInt(selected_store_timing['store_info'].store_pre_closed_min);
     store_pre_closed_min=(store_pre_closed_min) ? store_pre_closed_min : 0;
    var mydate = new Date();
    var closedate:any = mydate.setDate(mydate.getDate() + parseInt(selected_store_timing['store_info'].store_preorder_max_days));
      closedate = new Date(closedate);
    var currdate:any = new Date();
    var datetodayobj  = this.getselectday(selected_store_timing,currdate.getDay());
    var currentopentime = datetodayobj['open_time'];
    var currentclosetime = datetodayobj['close_time'];
    var hourssplit = currentclosetime.split(":");
    var mycurrdateclose = new Date();
    var nowdate:any = new Date();
    var stepMinute = 15;
    mycurrdateclose.setHours(hourssplit[0]);
    mycurrdateclose.setMinutes(hourssplit[1]);
    console.log('mycurrdateclose: ',mycurrdateclose);
    var temp_currdate= new Date();
    console.log('current time pc: ',temp_currdate);
  
    temp_currdate.setMinutes(temp_currdate.getMinutes()+store_pre_closed_min+parseInt(zonetime));
    console.log('temp_currdate: ',temp_currdate);
    
    console.log('currentopentime',currentopentime);  
    if(temp_currdate.getTime() > mycurrdateclose.getTime()||(currentopentime=='00:00:00' && currentclosetime=='00:00:00'))
    {
      currdate = currdate.setDate(currdate.getDate() + 1);
      currdate = new Date(currdate);
    }
    console.log('minDate currdate',currdate);
    // $('#date_time_picker #date').scroller('destroy');
    
    let mobiscroll = (<any>window).mobiscroll;
      let mobitimescroll = (<any>window).mobiScrollTime;
      mobitimescroll.destroy();
      var dateChange = true;
    console.log('currdate: ',currdate,' closedate: ',closedate);
     let instance = this.initDatePicker(currdate,closedate);

  instance.unbind('change').change(()=>{
    var date_picker_instance = mobiscroll.instance('getDate');
   
  
  var date = date_picker_instance.getDate();
  var day = date_picker_instance.getDay();
  var year = date_picker_instance.getFullYear();
  var month = date_picker_instance.getMonth();
  var getdateobj = this.getselectday(selected_store_timing,day);
  var open_time  = getdateobj['open_time'];
  var close_time = getdateobj['close_time'];
  var res = close_time.split(":");
  var olddate:any = new Date(year, month, date, res[0], res[1], 0, 0);
  var subbed:any = new Date(olddate - selected_store_timing['store_info'].store_pre_closed_min*60*1000);
  var openres = open_time.split(":");
  var opendatetime:any = new Date(subbed.getFullYear(),subbed.getMonth(),subbed.getDate(),openres[0],parseInt(openres[1])+parseInt(zonetime), 0, 0);
  console.warn('opendatetime1: ',opendatetime);
  // $('#date_time_picker #time').scroller('destroy');
  mobitimescroll.destroy();
  
  if(nowdate.getDate() == date_picker_instance.getDate())
  {
   var opendatetime:any = new Date();
    var currmin:any  = parseInt(nowdate.getTime());
    var mycurrmin:any       = parseInt(subbed.getTime());
    var diff_time:any       = parseInt(mycurrmin) - parseInt(currmin);
    diff_time=this.millisToMinutesAndSeconds(diff_time);
    diff_time=parseInt(diff_time);
    if(diff_time <= 15)
    {
      if(diff_time%5==0 && diff_time!=0)
      {
        stepMinute = 5;
      }
      else
      {
        stepMinute = 1;
      }
      if(currdate.getTime() > mycurrdateclose.getTime())
      {
  console.log(`%c subject00 `, 'background: #222; color: #bada55');
  
        currdate = currdate.setDate(currdate.getDate() + 1);
        day = currdate.getDay();
        var getdateobj = this.getselectday(selected_store_timing,day);
        var open_time:any  = getdateobj['open_time'];
        var close_time:any = getdateobj['close_time'];
        var res = close_time.split(":");
        var opendatetime:any = new Date(year, month, date, res[0], res[1], 0, 0);
        subbed = new Date(olddate - selected_store_timing['store_info'].store_pre_closed_min*60*1000);
        var openres = open_time.split(":");
        subbed = new Date(subbed.getFullYear(),subbed.getMonth(),subbed.getDate(),openres[0],openres[1], 0, 0);
  console.warn('opendatetime2: ',opendatetime);
  
      }
    }
    else
    {
  console.log(`%c subject01 `, 'background: #222; color: #bada55');
  
     var now = new Date();
     var opendatetime:any = new Date(now.getFullYear(),now.getMonth(), now.getDate(), now.getHours(), now.getMinutes()+parseInt(zonetime));
      var openres = open_time.split(":");
      var nowopentime = new Date(now.getFullYear(),now.getMonth(),now.getDate(),openres[0],parseInt(openres[1])+parseInt(zonetime), 0, 0);
      if(nowopentime.getTime()> opendatetime.getTime())
      {
        opendatetime = new Date(now.getFullYear(),now.getMonth(),now.getDate(),openres[0],parseInt(openres[1])+parseInt(zonetime), 0, 0);
      }
  
      console.log('nowopentime: ',nowopentime);
      console.log('opendatetime: ',opendatetime);
      
    }
  }
  else{
  console.log(`%c subject001 `, 'background: #222; color: #bada55');
  
      var day = date_picker_instance.getDay();
      console.log('selected_store_timing: ',selected_store_timing,' day: ',day);
      
      var getdateobj = this.getselectday(selected_store_timing,day);
      console.log('getdateobj: ',getdateobj);
      
      open_time = getdateobj['open_time'];
      close_time = getdateobj['close_time'];
      if(open_time=='00:00:00' && close_time=='00:00:00')
      {
  console.log(`%c subject00:00:00 `, 'background: #222; color: #bada55');
  
        currdate = date_picker_instance.setDate(date_picker_instance.getDate() + 1);
        currdate = new Date(currdate);
        console.log('day',currdate);
        // $('#date_time_picker #date').mobiscroll('setDate',currdate).change();
        mobiscroll.setDate(currdate);
  
        day = currdate.getDay();
        
        var getdateobj = this.getselectday(selected_store_timing,day);
        console.table(getdateobj);
        open_time  = getdateobj['open_time'];
        close_time = getdateobj['close_time'];
        var res = close_time.split(":");
        var year = currdate.getFullYear();
        var month = currdate.getMonth();
        var date = currdate.getDate();
        var openres = open_time.split(":");
        opendatetime = new Date(year,month,date,openres[0],openres[1]+parseInt(zonetime), 0, 0);
        var olddate:any = new Date(year, month, date, res[0], res[1], 0, 0);
        var subbed:any = new Date(olddate - selected_store_timing['store_info'].store_pre_closed_min*60*1000);
  
      }
    }
  console.log('opendatetime.getMinutes(): ',opendatetime.getMinutes());
  console.log('opendatetime : ',opendatetime);
  if(opendatetime.getMinutes()%15!=0)
  {
  console.log(`%c subject1 `, 'background: #222; color: #bada55');
  
    var remaindermin:any = opendatetime.getMinutes()%15;
    var totalmin:any = (opendatetime.getMinutes() - remaindermin)+15; 
    // tslint:disable-next-line:no-duplicate-variable
    var now = new Date();
    opendatetime = new Date(opendatetime.getFullYear(),opendatetime.getMonth(), opendatetime.getDate(), opendatetime.getHours(), parseInt(totalmin));
  console.log('opendatetime: ',opendatetime);
  }
  console.log('subbed.getTime(): ',subbed.getTime());
  
  if(opendatetime.getTime() > subbed.getTime()){
  console.log(`%c subject2 `, 'background: #222; color: #bada55');
  
    var opensdate = date_picker_instance.setDate(date_picker_instance.getDate() + 1);
    currdate = new Date(opensdate);
    console.log(currdate);
    // $('#date_time_picker #date').mobiscroll('setDate',currdate);
    mobiscroll.setDate(currdate);
  
    day = currdate.getDay();
    var getdateobj = this.getselectday(selected_store_timing,day);
    //console.table(getdateobj);
    open_time  = getdateobj['open_time'];
    close_time = getdateobj['close_time'];
    var res = close_time.split(":");
    var year = currdate.getFullYear();
    var month = currdate.getMonth();
    var date = currdate.getDate();
    var openres = open_time.split(":");
    var opendatetime:any = new Date(year,month,date,openres[0],openres[1]+parseInt(zonetime), 0, 0);
    var olddate:any = new Date(year, month, date, res[0], res[1], 0, 0);
    var subbed:any = new Date(olddate - selected_store_timing['store_info'].store_pre_closed_min*60*1000);
  }
  stepMinute  = (typeof(stepMinute)!='undefined'  && stepMinute!=null) ? stepMinute : 15;
  console.log('minDate: ',opendatetime,' maxDate: ',subbed,' stepMinute: ',stepMinute);
  // mobiscroll.setDate( new Date(0, 0, 0, 0, 0, 0, 0));
  // setDateTimeToLocal();
    //  mobitimescroll.init(opendatetime,subbed,stepMinute,langCode,dateChange);
  
      // let timeinstance:any = this.initTimePicker(opendatetime,subbed,stepMinute,langCode,dateChange);
  // $('#date_time_picker #time').mobiscroll().time({
  //       preset: 'time',
  //       minDate: opendatetime,
  //       maxDate: subbed,
  //       theme: 'android-ics light',
  //       mode: "scroller",
  //       lang: langCode,
  //       display: 'inline',
  //       showOnFocus: true,
  //       rows: 3,
  //       timeWheels: 'hhiiA',
  //       timeFormat: 'hh:ii A',
  //       showNow: false,
  //       stepMinute: stepMinute
  // });
  // $('#date_time_picker #time').mobiscroll('setDate', new Date(0, 0, 0, 0, 0, 0, 0), true);
  // mobiscroll.setDate(new Date(0, 0, 0, 0, 0, 0, 0));
               let timeinstance:any = this.initTimePicker(opendatetime,subbed,stepMinute,langCode,dateChange);
              timeinstance.unbind('change').change(()=>{
                this.datetime = this.getTimeDate();
  // this.setDateTimeToLocal();
                console.log('datetime2: ',this.datetime);
              })
            })
            instance.change(); 
            this.datetime = this.getTimeDate();
  
  // this.setDateTimeToLocal();
  }

  private getTimeDate(){
    let mobiscroll = (<any>window).mobiscroll;
    let mobitimescroll = (<any>window).mobiScrollTime;
    let dateinst =  mobiscroll.instance('getDate');
    console.log('getTimeDate dateinst: ',dateinst);
    
    let timeinst =  mobitimescroll.instance('getDate');
    console.log('timeinst: ',timeinst);

    let date = moment(dateinst).format('YYYY-MM-DD');
    console.log('date: ',date);
    let time = moment(timeinst).format('hh:mm A');
    console.log('time: ',time);
    return date+' '+time;
  }

  private initDatePicker(todaysdate,closedate){
    let mobiscroll = (<any>window).mobiscroll;
    mobiscroll.destroy();
    // console.log(`gggg todaysdate: ${todaysdate} , ${todaysdate.toDate()}, closedate: ${closedate}, ${closedate.toDate()}`);
    
    // return mobiscroll.init(todaysdate.toDate(),closedate.toDate());
    return mobiscroll.init(todaysdate,closedate);
  }
  millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    return minutes;
  }
  private initTimePicker(opentime,closetime,stepmin,langCode,datechange){
    let mobitimescroll = (<any>window).mobiScrollTime;
    // console.log('destroy');
    mobitimescroll.destroy();
    // console.log('ganesh');
    
    // console.log(`opentime: ${opentime.toDate()}, closetime: ${closetime.toDate()}, stepmin: ${stepmin} ,langcode: ${langCode},datechange: ${datechange}`);
    
    return mobitimescroll.init(opentime,closetime,stepmin,langCode,datechange);
  }
 
  private getHoursMinArray(timestring:string){
    console.log(timestring);
    return this.storeInfo[timestring].split(':');
  }
}
