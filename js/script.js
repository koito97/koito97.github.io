function movehtml() {
    var elem = document.getElementById("Htmlkoito97Bar")
    var width = 5;
    var id = setInterval(frame, 10);
    function frame () {
        if (width >= 60) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1 + '%';
        }
    }
}

function movecss() {
    var elem = document.getElementById("CSSkoito97Bar")
    var width = 5;
    var id = setInterval(frame, 10);
    function frame () {
        if (width >= 50) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1 + '%';
        }
    }
}

function movejs() {
    var elem = document.getElementById("JSkoito97Bar")
    var width = 5;
    var id = setInterval(frame, 10);
    function frame () {
        if (width >= 35) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1 + '%';
        }
    }
}

function movebs() {
    var elem = document.getElementById("BSkoito97Bar")
    var width = 5;
    var id = setInterval(frame, 10);
    function frame () {
        if (width >= 45) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1 + '%';
        }
    }
}

function movegit() {
    var elem = document.getElementById("gitkoito97Bar")
    var width = 5;
    var id = setInterval(frame, 10);
    function frame () {
        if (width >= 70) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1 + '%';
        }
    }
}

function movew3f() {
    var elem = document.getElementById("w3fkoito97Bar")
    var width = 5;
    var id = setInterval(frame, 10);
    function frame () {
        if (width >= 55) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1 + '%';
        }
    }
}

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
    document.getElementById("main").style.marginLeft = "35%";
    document.getElementById("koito97Sidebar").style.width = "35%";
    document.getElementById("koito97Sidebar").style.display = "block";
    document.getElementById("koito97openNav").style.display = 'none';
}

function w3_close() {
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("koito97Sidebar").style.display = "none";
    document.getElementById("koito97openNav").style.display = "inline-block";
}