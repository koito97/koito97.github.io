mybutton = document.getElementById("koito97TopBtn");

window.onscroll = function() {scrollFunction()}

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none"
    }
}

function atasFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function w3_open() {
    document.getElementById("koito97Sidebar").style.display = "block";
}

function w3_close() {
    document.getElementById("koito97Sidebar").style.display = "none";
}