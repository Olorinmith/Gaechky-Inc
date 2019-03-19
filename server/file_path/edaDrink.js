function openEdaDrink(evt, edaDrink) {
var i, tabcontent, tablinks;


tabcontent = document.getElementsByClassName("buttonEdaDrinkContent");
for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
}

tablinks = document.getElementsByClassName("buttonEdaDrinkLink");
for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
}

document.getElementById(edaDrink).style.display = "block";
evt.currentTarget.className += " active";
}
