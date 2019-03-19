function openEda(evt, EdaName) {
var i, tabcontent, tablinks;


tabcontent = document.getElementsByClassName("buttonEdaContent");
for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
}

tablinks = document.getElementsByClassName("buttonEdaLink");
for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
}

document.getElementById(EdaName).style.display = "block";
evt.currentTarget.className += " active";
}
