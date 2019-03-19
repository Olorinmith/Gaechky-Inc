function openStol(evt, stolName) {
var i, tabcontent, tablinks;


tabcontent = document.getElementsByClassName("buttonStolContent");
for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
}

tablinks = document.getElementsByClassName("buttonStolLink");
for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
}

document.getElementById(stolName).style.display = "block";
evt.currentTarget.className += " active";
}
