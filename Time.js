var clock = document.getElementById('clock');
var color = document.getElementById('color');
var date = document.getElementById('date');


function hexoClock() {
    var time = new Date();
    var h = (time.getHours() %24).toString();
    var m = time.getMinutes().toString();
    var s = time.getSeconds().toString();

    

    if (h.length < 2) {
        h = '0' + h;
    }

    if (m.length < 2) {
        m = '0' + m;
    }

    if (s.length < 2) {
        s = '0' + s;
    }

    

    var clockString = h + ':' + m + ':' + s;
    var colorString = 'q' + h + m + s;
    

    clock.textContent = clockString;
    color.textContent = colorString;
    

    document.body.style.background = colorString;

}

hexoClock();
setInterval(hexoClock, 1000);


function renderTime(){
    //Date
    var mydate = new Date();
    var year = mydate.getFullYear();
            if( year < 1000 ){
                year +=1900
            }
    var day = mydate.getDay();
    var month = mydate.getMonth();
    var daym = mydate.getDate();
    var dayarray = new Array("Monday,","Tuesday,", "Wednesday,", "Thursday,", "Friday,", "Saturday,", "Sunday,");
    var montharray = new Array("January", "Febraury", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    // Date End

    var myClock = document.getElementById("clockDisplay");
    myClock.textContent = "" + dayarray[day] + " " + daym + " " + montharray[month] + " " + year ;
    myClock.innerText="" + dayarray[day] + " " + daym + " " +  montharray[month] + " " + year ;
    setTimeout("renderTime()", 1000);
}
renderTime();
