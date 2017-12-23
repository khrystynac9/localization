var applyLanguage = function (lang) {
	alert('Now language is: ' + lang);
}
var myName;
var getCurrentLanguage = function () {
	var defaultLanguage = 'ua';
    return defaultLanguage;
}

var currentLang = getCurrentLanguage();
var langEls = document.getElementsByClassName('lang-' + currentLang);
var radioButtons = document.getElementsByTagName("input");
for (var i = 0; i < radioButtons.length; i++) {
	radioButtons[i].addEventListener("click", function() {
        var selectedLang = document.querySelector('input[name = "lang"]:checked').value;
        langEls = document.getElementsByClassName('lang');
        for (var i = 0; i < langEls.length; i++) {
            langEls[i].classList.remove('visible');
        }
        applyLanguage(selectedLang);
        if(selectedLang) {
            langEls = document.getElementsByClassName('lang-' + selectedLang);
            for (var k = 0; k < langEls.length; k++) {
                langEls[k].classList.add('visible');
            }
        }
    })
}

for (var i=0; i<langEls.length; i++) {
	var langEl = langEls[i];
  langEl.classList.add('visible');
}

var name;
if(!localStorage.myUserName) {
    var myUserName = prompt("What is your name? Enter your name here.");
    document.getElementById("userName").innerText = myUserName;
    var $save = document.querySelector('html body button#save');
    $save.addEventListener('click', function(){
        localStorage.setItem('myUserName', JSON.stringify(myUserName));
        name = JSON.parse(localStorage.getItem('myUserName'));
        console.log(localStorage.myUserName);
    });
}  else {
    name = JSON.parse(localStorage.getItem('myUserName'));
    document.getElementById("userName").innerHTML = name;
    alert("Glad to see you,  " + name +" Have a nice day")
}

var $deleteButton = document.querySelector("button#delete");
$deleteButton.addEventListener('click', function(){
    delete localStorage['myUserName'];
    myName = document.getElementById("userName").innerHTML = "Username";
    console.log(localStorage.length);
})


