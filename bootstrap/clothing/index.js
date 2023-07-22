var moshi = document.querySelector("#moshi");
var moshiI = document.querySelector("#moshi>i");
var box = document.querySelector(".box");
var boxs = document.querySelector(".box .container");
var clicks = document.querySelector(".clicks");
var clients = document.querySelector(".clients ");
var topnav = document.querySelector(".topnav ");
var pds = true;
box.onclick = function () {
    boxs.classList.toggle("click");
    if (pds) {
        clicks.style.display = "block";
        clicks.style.height = "250px";
        boxs.style.paddingLeft = "23px"

        pds = false;
    } else {
        boxs.style.paddingLeft = "15px"
        clicks.style.height = "0px";
        pds = true;
    }


}
var pd = true;
moshi.onclick = function () {
    if (pd) {
        moshiI.className = "fa  fa-2x fa-sun-o";
        document.body.style.backgroundColor = "black"
        document.body.style.color = "white"
        topnav.style.color = "white"
        clients.style.backgroundColor = "black"
        topnav.style.backgroundColor = "black"
        pd = false;
    } else {
        moshiI.className = "fa  fa-2x fa-moon-o";
        document.body.style.backgroundColor = "white";
        topnav.style.backgroundColor = "#FAFAFB"
        clients.style.backgroundColor = "#FAFAFB"
        document.body.style.color = "black";
        topnav.style.color = "black";
        pd = true;
    }

}
window.onscroll = function () {
    // console.log(window.scrollY)
    if (window.scrollY > 50 && window.scrollY < 100) {
        topnav.style.position = "fixed";
        topnav.style.background = "#fff";
        window.onscroll = null;
    }

}