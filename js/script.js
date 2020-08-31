function navBarAboutMe() {
    document.getElementById("contact").style.display = "none";
    var x = document.getElementById("aboutMe");
    if (x.style.display === "block") {
        x.style.display = "none";
        document.getElementById("opening").style.display = "block";
    } else {
        x.style.display = "block";
        document.getElementById("opening").style.display = "none";
    }
}

function navBarContact() {
    document.getElementById("aboutMe").style.display = "none";
    var x = document.getElementById("contact");
    if (x.style.display === "block") {
        x.style.display = "none";
        document.getElementById("opening").style.display = "block";
    } else {
        x.style.display = "block";
        document.getElementById("opening").style.display = "none";
    }
}