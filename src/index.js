
function displayTime() {
  $('.clock').text(moment().format('h:mm:ss a'));
  setTimeout(displayTime, 1000);
}

// $(document).ready(function() {
//   //when page is loaded run displayTime
//     displayTime();
// });
//
var sound = document.getElementById("sound");

function playAlarm() {
  sound.play();
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
      var currentHour = parseInt(moment().format('h'));
      var currentMinute = parseInt(moment().format('mm'));

      if ((hour === currentHour) && (minute === currentMinute)) {
        $('#alarm').show();
        $('.alarm-set').hide();
        playAlarm();
      }
    }
    setInterval(alarmTimer, 1000);
  });

});
