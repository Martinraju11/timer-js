var start = document.getElementById("start");
var stop = document.getElementById("stop");
var reset = document.getElementById("reset");
var second = document.getElementById("second");
var speed = document.getElementById("speed");
var fast = document.getElementById("fast");
var faster = document.getElementById("faster");
var a = 0;
var c = 0;
let intervalId1;

start.addEventListener("click", function () {
    intervalId1 = setInterval(function () {
        a++;
        speed.innerHTML = a;
        b = speed.innerHTML;
        if (b > 9) {
            fast.style.display = "none";
        }
        if (b > 59) {
            speed.innerHTML = 0;
            fast.style.display = "block";
            a = 0;
            c++;
            second.innerHTML = c + ":";
        }
        if (c > 9) {
            faster.style.display = "none";
        }

    }, 20, a);

})

stop.addEventListener("click", function () {
    clearInterval(intervalId1);
})

reset.addEventListener("click", function () {
    clearInterval(intervalId1);
    speed.innerHTML = 0;
    fast.style.display = "block";
    second.innerHTML = 0 + ":";
    a = 0;
    c = 0;
    faster.style.display = "block";

})
