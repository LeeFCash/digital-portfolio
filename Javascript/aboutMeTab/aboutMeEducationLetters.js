var mainContentAboutMeContentText3Letters = document.getElementById("main-content-aboutMeContent-text3-letters");
var v = "graduated";
var split = v.split("");
console.log(split);

for(let i = 0; i < split.length; i++){
    mainContentAboutMeContentText3Letters.innerHTML += "<span class=\"main-content-aboutMeContent-text3-letter"+[i]+"-opacity0\">" + split[i] + "</span>";
    //mainContentAboutMeContentText2Number1.innerHTML += "<span style=\"opacity: 0.0; color: white;\"></span>";
}

var timer1 = setTimeout(setTimer, 5000);

function setTimer() {
var letter = 0;
var timer = setInterval(ontick, 150);

function ontick() {
    const letterSlector = mainContentAboutMeContentText3Letters.querySelectorAll('span')[letter];
    letterSlector.style.setProperty("opacity", "1.0");
    letter++;

    var i = 0;
    i++;
    if (i > 9) {
        clearInterval(timer1);
        clearInterval(timer);
        var timer1 = null;
        var timer = null;
        return;
    }


    if(letterSlector === split.length){
        clearInterval(timer);
        timer = null;
        return;
    }
}
}
