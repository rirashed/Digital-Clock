
function showTime() {

  var today = new Date();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();

  minutes = CheckTime(minutes);
  seconds = CheckTime(seconds);
  document.getElementById('clock').innerHTML = hours + ":"+minutes+":"+seconds;
  var y = setTimeout(showTime, 500);



}
function CheckTime(x){
  if(x < 10){
    x = "0"+x;

  }
  return x;
}
