function openDrink(evt, drinkName) {
var i, tabcontent, tablinks;


tabcontent = document.getElementsByClassName("buttonDrinkContent");
for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
}

tablinks = document.getElementsByClassName("buttonDrinkLink");
for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
}

document.getElementById(drinkName).style.display = "block";
evt.currentTarget.className += " active";
}
