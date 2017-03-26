
function displayTime() {
    var clockDiv = document.getElementById('clock');
    var time = moment().format('HH:mm:ss');
    // Then we set the text inside the clock div
    clockDiv.innerText = time;
    setTimeout(displayTime, 1000);
}
$(document).ready(function() {
  //when page is loaded run displayTime
    displayTime();
});

// $(document).ready( function() {
//
//   function displayTime() {
//     // This gets a "handle" to the clock div in our HTML
//     var clockDiv = document.getElementById('clock');
//
//     var currentTime = new Date();
//     var hours = currentTime.getHours();
//     var minutes = currentTime.getMinutes();
//     var seconds = currentTime.getSeconds();
//     var meridiem = "AM";
//     if (hours > 12) {
//         hours = hours - 12; // Convert to 12-hour format
//         meridiem = "PM"; // Keep track of the meridiem
//     }
//     // 0 AM and 0 PM should read as 12
//     if (hours === 0) {
//         hours = 12;
//     }
//
//     if(hours < 10) {
//         // Add the "0" digit to the front
//         // so 9 becomes "09"
//         hours = "0" + hours;
//     }
//
//     if(minutes < 10) {
//         minutes = "0" + minutes;
//     }
//
//     if(seconds < 10) {
//         seconds = "0" + seconds;
//     }
//
//     // Then we set the text inside the clock div
//     clockDiv.innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem;
//   }
//
//   displayTime();
//   setInterval(displayTime, 1000);
//
// });
