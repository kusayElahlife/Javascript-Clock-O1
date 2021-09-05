
document.addEventListener("DOMContentLoaded",function myFunction() {
    var person = prompt("Please enter your name");
    if (person != null) {
      document.getElementById("myName").innerHTML = person ;
    }

})

    function showTime() {
        const today = new Date();
        let h = today.getHours();
        let m = today.getMinutes();
        let s = today.getSeconds();
        let weekday = new Array(7);
            weekday[0] = "Pazar";
            weekday[1] = "Pazartesi";
            weekday[2] = "Salı";
            weekday[3] = "Çarşamba";
            weekday[4] = "Perşembe";
            weekday[5] = "Cuma";
            weekday[6] = "Cumartesi";
        let d =weekday[today.getDay()]
        h = checkTime(h);
        m = checkTime(m);
        s = checkTime(s);
        
        document.getElementById('myClock').innerHTML =  h + ":" + m + ":" + s + " " + d;
        setTimeout(showTime, 1000);
    }
    
    function checkTime(i) {
        if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
    }
