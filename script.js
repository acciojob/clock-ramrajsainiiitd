let time = document.getElementById("timer");
const CurrentDate = new Date();
const year = CurrentDate.getFullYear();
const month = CurrentDate.getMonth() + 1;
const Day = CurrentDate.getDay();
let hours = CurrentDate.getHours();
const minute = CurrentDate.getMinutes();
const second = CurrentDate.getSeconds();
let TimeSatmp = "";
if(hours>12){
hours=hours%12;
TimeSatmp = "PM";
}
else{
  TimeSatmp = "AM";
}
DtTime = `${month}/${Day}/${year}, ${hours}:${minute}:${second} ${TimeSatmp}`
time.innerHTML = DtTime;