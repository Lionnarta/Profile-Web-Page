// Navigation Bar About Me Activation
function navBarAboutMe() {
    document.getElementById("contact").style.display = "none";
    var x = document.getElementById("aboutMe");
    if (x.style.display === "block") {
        x.style.display = "none";
        document.getElementById("opening").style.display = "block";
        setColor("first",1);
        setColor("second",1);
    } else {
        x.style.display = "block";
        document.getElementById("opening").style.display = "none";
        setColor("first",0);
        setColor("second",1);
    }
}

// Navigation Bar Contact Activation
function navBarContact() {
    document.getElementById("aboutMe").style.display = "none";
    var x = document.getElementById("contact");
    if (x.style.display === "block") {
        x.style.display = "none";
        document.getElementById("opening").style.display = "block";
        setColor("second",1);
        setColor("first",1);
    } else {
        x.style.display = "block";
        document.getElementById("opening").style.display = "none";
        setColor("second",0);
        setColor("first",1);
    }
}

function setColor(id,clr) {
    if(clr == 0){
        document.getElementById(id).style.color = "white";
        document.getElementById(id).style.backgroundColor = "rgb(146, 124, 124)";
    } else {
        document.getElementById(id).style.color = "black";
        document.getElementById(id).style.backgroundColor = "white";
    }
}