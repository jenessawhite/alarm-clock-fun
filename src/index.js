function displayTime() {
  $('.clock').text(moment().format('H:mm:ss a'));
  setTimeout(displayTime, 1000);
}

function clearForm() {
  document.getElementById("alarm-form").reset();
}

var sound = document.getElementById("sound");

function playAlarm() {
  sound.play();
}

function snoozeAlarm() {
  clearInterval(myVar);
}


$(document).ready(function(){
  //when page is loaded run displayTime
  displayTime();
  $('#alarm').hide();

  $('#alarm-form').submit(function(event){
    event.preventDefault();

    var hour = parseInt($('#hour').val());
    var minute = parseInt($('#minute').val());
    $(".alarm-set").text("Your alarm is set for " + hour + ":" + minute);

    function alarmTimer() {
      var currentHour = parseInt(moment().format('H'));
      var currentMinute = parseInt(moment().format('mm'));

      if ((hour === currentHour) && (minute === currentMinute)) {
        $('#alarm').show();
        $('.alarm-set').hide();
        playAlarm();
      }
    }
    var myVar = setInterval(function(){ alarmTimer() }, 1000);
    // setInterval(alarmTimer, 1000);
  });
});
