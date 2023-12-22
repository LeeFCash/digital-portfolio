// tracker
var currentTab = 0;
// clean startPage
startPage();
// tabsSwitch
function tab1() {
    var mainContent = document.getElementById('main-content');
    var aboutMeContent = document.getElementById('main-content-aboutMeContent');
    var startPage1 = document.getElementById('main-content-startPage');
    var workSamples = document.getElementById('main-content-workSamples');
    var contactMe = document.getElementById('main-content-contactMe');
    startPage1.style.visibility = "hidden";
    aboutMeContent.style.visibility = "hidden";
    workSamples.style.visibility = "hidden";
    contactMe.style.visibility = "hidden";
    aboutMeContent.remove();
    mainContent.appendChild(aboutMeContent);
    aboutMeContent.style.visibility = "visible";
    aboutMeAgeNumbers();
    aboutMeEducationLetters();
    aboutMeNameLetters();
    currentTab = 1;

    return currentTab;
}
//
function tab2() {
    var mainContent = document.getElementById('main-content');
    var aboutMeContent = document.getElementById('main-content-aboutMeContent');
    var startPage1 = document.getElementById('main-content-startPage');
    var workSamples = document.getElementById('main-content-workSamples');
    var contactMe = document.getElementById('main-content-contactMe');
    startPage1.style.visibility = "hidden";
    aboutMeContent.style.visibility = "hidden";
    workSamples.style.visibility = "hidden";
    contactMe.style.visibility = "hidden";
    workSamples.remove();
    mainContent.appendChild(workSamples);
    workSamples.style.visibility = "visible";
    currentTab = 2;
    var mainContentAboutMeContentText2Number1 = document.getElementById("main-content-aboutMeContent-text2-number1");
    mainContentAboutMeContentText2Number1.innerHTML = "";
    var mainContentAboutMeContentText3Letters = document.getElementById("main-content-aboutMeContent-text3-letters");
    mainContentAboutMeContentText3Letters.innerHTML = "";
    var mainContentAboutMeContentText1Letters = document.getElementById("main-content-aboutMeContent-text1-letter1");
    mainContentAboutMeContentText1Letters.innerHTML = "";
    return currentTab;
}
//
function tab3() {
    var mainContent = document.getElementById('main-content');
    var aboutMeContent = document.getElementById('main-content-aboutMeContent');
    var startPage1 = document.getElementById('main-content-startPage');
    var workSamples = document.getElementById('main-content-workSamples');
    var contactMe = document.getElementById('main-content-contactMe');
    startPage1.style.visibility = "hidden";
    aboutMeContent.style.visibility = "hidden";
    workSamples.style.visibility = "hidden";
    contactMe.style.visibility = "hidden";
    contactMe.remove();
    mainContent.appendChild(contactMe);
    contactMe.style.visibility = "visible";
    currentTab = 3;
    var mainContentAboutMeContentText2Number1 = document.getElementById("main-content-aboutMeContent-text2-number1");
    mainContentAboutMeContentText2Number1.innerHTML = "";
    var mainContentAboutMeContentText3Letters = document.getElementById("main-content-aboutMeContent-text3-letters");
    mainContentAboutMeContentText3Letters.innerHTML = "";
    var mainContentAboutMeContentText1Letters = document.getElementById("main-content-aboutMeContent-text1-letter1");
    mainContentAboutMeContentText1Letters.innerHTML = "";
    return currentTab;
}
// get tabs and close 
function startPage() {
    var aboutMeContent = document.getElementById('main-content-aboutMeContent');
    var workSamples = document.getElementById('main-content-workSamples');
    var contactMe = document.getElementById('main-content-contactMe');
    aboutMeContent.style.visibility = "hidden";
    workSamples.style.visibility = "hidden";
    contactMe.style.visibility = "hidden";
}
//functions Numbers and letters
function aboutMeAgeNumbers() {
    var mainContentAboutMeContentText2Number1 = document.getElementById("main-content-aboutMeContent-text2-number1");
    var v = "18";
    var split = v.split("");
    console.log(split);
    
    for(let i = 0; i < split.length; i++){
        mainContentAboutMeContentText2Number1.innerHTML += "<span class=\"main-content-aboutMeContent-text3-letter"+[i]+"-opacity0\">" + split[i] + "</span>";
        //mainContentAboutMeContentText2Number1.innerHTML += "<span style=\"opacity: 0.0; color: white;\"></span>";
    }
    
    var timer1 = setTimeout(setTimer, 5000);
    
    function setTimer() {
    var letter = 0;
    var timer = setInterval(ontick, 500);
    setTimeout(function(){
        clearInterval(timer);
        timer = null;
        }, 1000);
    
    function ontick() {
        const letterSlector = mainContentAboutMeContentText2Number1.querySelectorAll('span')[letter];
        letterSlector.style.setProperty("opacity", "1.0");
        letter++;
        var i = 0;
        i++;
        if (i > 2) {
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
}
//
function aboutMeEducationLetters() {
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
    setTimeout(function(){
        clearInterval(timer);
        timer = null;
        }, 2000);    
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
    }
//
function aboutMeNameLetters() {
    var mainContentAboutMeContentText1Letters = document.getElementById("main-content-aboutMeContent-text1-letter1");
    var v = "Lee F. Cash";
    var split = v.split("");
    console.log(split);
    
    for(let i = 0; i < split.length; i++){
        mainContentAboutMeContentText1Letters.innerHTML += "<span class=\"main-content-aboutMeContent-text3-letter"+[i]+"-opacity0\">" + split[i] + "</span>";
        //mainContentAboutMeContentText2Number1.innerHTML += "<span style=\"opacity: 0.0; color: white;\"></span>";
    }
    
    ///*
    var timer1 = setTimeout(setTimer, 5000);
    
    function setTimer() {
    var letter = 0;
    var timer = setInterval(ontick, 150);
    setTimeout(function(){
        clearInterval(timer);
        timer = null;
        }, 2000);
    
    function ontick() {
        const letterSlector = mainContentAboutMeContentText1Letters.querySelectorAll('span')[letter];
        letterSlector.style.setProperty("opacity", "1.0");
        letter++;
    
        var i = 0;
        i++;
        if (i > 7) {
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
    }
    /* video to channal links 
            iframe.setAttribute("src", "https://www.youtube.com/embed/r-h2IPPMpBo?list=PL7vr_kFNXDB7JnTKGR6ZX_kqQGjUqeBQ7");
            v1
            iframe.setAttribute("src", "https://www.youtube.com/embed/bSdCY3ay8Qk?si=oYqbCSCG1mGvvJHq");
            v2
            iframe.setAttribute("src", "https://www.youtube.com/embed/_WRFMGZHrGs?si=dnKdbl2Izsi58Zg-");
            v3
            iframe.setAttribute("src", "https://www.youtube.com/embed/ryfU13Vkmls?si=etMo6sl_VNHCX2g2");
            v4
            iframe.setAttribute("src", "https://www.youtube.com/embed/s7Ih4r3CFsE?si=-4M_XEeRJlkSnCPG");
            v5
            iframe.setAttribute("src", "https://www.youtube.com/embed/L2SW84Q7L2I?si=6LtjayzBbDfoe7E5");
            v6
            iframe.setAttribute("src", "https://www.youtube.com/embed/H8eIcx-YAtE?si=GGAR0-2f4uLVPOvW");
            v7
            */
