


var countDownDate = new Date("July 18, 2024 00:00:00");
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    

    document.getElementById('days').innerHTML = days.toString().padStart(2, '0');;
    document.getElementById('hours').innerHTML = hours.toString().padStart(2, '0');;
    document.getElementById('minutes').innerHTML = minutes.toString().padStart(2, '0');;
    document.getElementById('seconds').innerHTML = seconds.toString().padStart(2, '0');;

},1000); 