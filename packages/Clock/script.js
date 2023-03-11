const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");
//date object
var date = new Date();
console.log(date);
//get current hour, minite and second
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log(`Time is ${hr}:${min}:${sec}`);//display current time
//determine initial rotate angle
let hrPosition = (hr * 360 / 12) + (min * 6 / 12);
let minPosition = (min * 360 / 60) + (sec * 6) / 60;
let secPosition = sec * 360 / 60;

function move() {
    //bug fix
    secPosition = secPosition + 6;
    minPosition = minPosition + 0.1;
    hrPosition = hrPosition + (30 / 3600);
    //rotate
    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

}

var intervel = setInterval(move, 1000);

const TIME = document.querySelector("#time");

function change() {
    var date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    if (sec < 10) sec = "0" + sec;
    if (min < 10) min = "0" + min;
    TIME.innerHTML = `${hr}:${min}:${sec}`;
}

var intervel = setInterval(change, 1000);

$("document").ready(function () {
    $('#but').click(function () {
        window.location = ("https://www.google.com/");
    })
});
