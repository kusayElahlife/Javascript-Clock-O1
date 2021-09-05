
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
        let d = today.getDay();
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
