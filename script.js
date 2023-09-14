let hr = document.getElementById("hour")
var min = document.getElementById("mins");
var sec = document.getElementById('sec');

setInterval(displayTime, 1000);

function displayTime(){
    let date = new Date();
    //console.log(date);

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    //console.log(hh,mm,ss);

    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 16*ss;

    hr.style.transform= `rotate(${hRotation}deg)`
    min.style.transform= `rotate(${mRotation}deg)`
    sec.style.transform=`rotate(${sRotation}deg)`
}

