var time = new Date().getHours(); // NATIVE JAVASCRIPT CODE: represents current hour (1-24)
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM

var updateClock = function()  {
var messageText;

var timeEventChange = document.getElementById("timeEvent");
var image = "http://www.pethealthnetwork.com/sites/default/files/content/images/cardigan-welsh-corgi100642967.png";

 
if (time == partyTime){
    image = "http://www.browniebites.net/photos/2011/deweybday1.jpg";
    messageText = "IZ PARTEE TIME!!";
}else if (time == napTime){
    image = "https://www.thepaws.net/wp-content/uploads/2018/11/corgi-dog-sleeping-picture-15.jpg";
    messageText = "IZ NAP TIME...";
}else if (time == lunchTime){
    image = "https://www.downvids.net/video/bestimages/img-corgi-eating-yogurt-665.jpg";
    messageText = "IZ NOM NOM NOM TIME!!";
}else if (time == wakeupTime){
    image = "http://www.adaymag.com/wp-content/uploads/2016/05/adaymag-corgibutt-01.jpg";
    messageText = "IZ TIME TO GETTUP.";
}else if (time < noon){
    image = "https://images.mentalfloss.com/sites/default/files/styles/insert_main_wide_image/public/iStock_000051945256_Small.jpg";
    messageText = "Good morning, Gorgeous!";
}else if (time > evening){
    image = "https://www.pets4homes.co.uk/images/breeds/50/d248d59954bb644e4437cce1758a9ce2.jpg";
    messageText = "Good Evening, Darling!";
}else{
    image = "https://ak7.picdn.net/shutterstock/videos/7334137/thumb/3.jpg";
    messageText = "Good afternoon, Sweetheart!";
}
 

timeEventChange.innerText = messageText;

var lolcatImage = document.getElementById("lolcat")
lolcatImage.src=image

showCurrentTime();
};

var showCurrentTime = function() {
    var clock = document.getElementById("clock");

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    if(hours >= noon){
        meridian = "PM";
    } if (hours >noon){
        hours = hours - 12;
    }
    if (minutes < 10){
        minutes = "0" + minutes;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }

    // put together the string that displays the time
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};

updateClock();

var oneSecond = 1000;
setInterval(updateClock, oneSecond);

var isPartyTime = false;
var partyButton = document.getElementById("partyTimeButton")

var partyEvent = function() {
    if(isPartyTime === false){
        isPartyTime = true;
        partyButton.innerText = "Party Time!";
        partyButton.style.backgroundColor ="#222"
    } else {
        isPartyTime = false;
        time = new Date().getHours();
        partyButton.innerText = "Party Over"
        partyButton.style.backgroundColor = "#0A8DAB"
    }
};

partyButton.addEventListener("click", partyEvent);

var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var wakeUpEvent = function() {
    wakeupTime = wakeUpTimeSelector.value;
};
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);

var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var lunchEvent = function() {
    lunchTime = lunchTimeSelector.value
}
lunchTimeSelector.addEventListener("change", lunchEvent);

var napTimeSelector = document.getElementById("napTimeSelector")
var napEvent = function(){
    napTime = napTimeSelector.value
}
napTimeSelector.addEventListener("change", napEvent);