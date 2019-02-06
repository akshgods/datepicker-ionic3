window.mobiscroll = {};
mobiscroll.instance = function(par){
  return $("#date").mobiscroll(par);
}

mobiscroll.init = (currdate,closedate)=>{
  mobi_instance = $("#date").mobiscroll().date({
    preset: 'date', // datetime,time,tree_list,image_text,select
    theme: 'android-ics light', //皮肤【android-ics light】【android-ics】【ios】【jqm】...
    mode: "scroller",//操作方式【scroller】【clickpick】【mixed】
    lang: 'en', // hu,de,es,fr,it,no,pt-BR,nl,tr,ja
    display: 'inline', //显示方【modal】【inline】【bubble】【top】【bottom】
    setText: 'Fijar',
    cancelText: 'Cancelar',
    dateFormat: 'yyyy-mm-dd',
    dateOrder: 'yyMMdd',
    minDate: currdate,
    maxDate: closedate,
    showNow: true,
    showOnFocus: true,
    rows: 3
  });
  return mobi_instance;
}
mobiscroll.destroy = function(){
  $('#date').scroller('destroy');
}

window.mobiScrollTime = {};
mobiScrollTime.instance = function(par){
  return $("#time").mobiscroll(par);
}

mobiScrollTime.init = function(mintime,maxtime,stepMinute){
  var mobitime_instance = $('#time').mobiscroll().time({
    preset: 'time',
    minDate: mintime,
    maxDate: maxtime,
    theme: 'android-ics light',
    mode: "scroller",
    lang: 'en',
    display: 'inline',
    showOnFocus: true,
    rows: 3,
    timeWheels: 'hhiiA',
    timeFormat: 'hh:ii A',
    showNow: false,
    stepMinute: stepMinute
  });
  return mobitime_instance;
}
mobiScrollTime.destroy = function(){
  $('#time').scroller('destroy');
}
  $(".android-ics.light.dw-inline.dw-webkit").hide();