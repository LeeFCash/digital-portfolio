// tracker
var currentTab = 0;
// removables 
var mainContent = document.getElementById('main-content');
var aboutMeContent = document.getElementById('main-content-aboutMeContent');
var startPage1 = document.getElementById('main-content-startPage');
var workSamples = document.getElementById('main-content-workSamples');
var contactMe = document.getElementById('main-content-contactMe');
// clean startPage
startPage();
// tabsSwitch
function tab1() {
    startPage1.style.visibility = "hidden";
    aboutMeContent.style.visibility = "hidden";
    workSamples.style.visibility = "hidden";
    contactMe.style.visibility = "hidden";
    contactMe.remove();
    workSamples.remove();
    startPage1.remove();
    aboutMeContent.remove();
    mainContent.appendChild(aboutMeContent);
    aboutMeContent.style.visibility = "visible";
    var mainContentAboutMeContentText1Letter1 = document.getElementById('main-content-aboutMeContent-text1-letter1');
    mainContentAboutMeContentText1Letter1.innerHTML = "";
    var mainContentAboutMeContentText2Number1 = document.getElementById('main-content-aboutMeContent-text2-number1');
    mainContentAboutMeContentText2Number1.innerHTML = "";
    var mainContentAboutMeContentText3Letter2 = document.getElementById('main-content-aboutMeContent-text3-letter2');
    mainContentAboutMeContentText3Letter2.innerHTML = "";
    setTimeout(aboutMeNAE, 5000);
    //aboutMeNAE();
    currentTab = 1;

    return currentTab;
}
//
function tab2() {
    startPage1.style.visibility = "hidden";
    aboutMeContent.style.visibility = "hidden";
    workSamples.style.visibility = "hidden";
    contactMe.style.visibility = "hidden";
    contactMe.remove();
    workSamples.remove();
    startPage1.remove();
    aboutMeContent.remove();
    mainContent.appendChild(workSamples);
    workSamples.style.visibility = "visible";
    tab2function();
    currentTab = 2;
    return currentTab;
}
//
function tab3() {
    startPage1.style.visibility = "hidden";
    aboutMeContent.style.visibility = "hidden";
    workSamples.style.visibility = "hidden";
    contactMe.style.visibility = "hidden";
    contactMe.remove();
    workSamples.remove();
    startPage1.remove();
    aboutMeContent.remove();
    mainContent.appendChild(contactMe);
    contactMe.style.visibility = "visible";
    currentTab = 3;
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
function aboutMeNAE() {
    console.log('hello');
    var mainContentAboutMeContentText1Letter1 = document.getElementById('main-content-aboutMeContent-text1-letter1');
    mainContentAboutMeContentText1Letter1.innerHTML = "";
    var mainContentAboutMeContentText2Number1 = document.getElementById('main-content-aboutMeContent-text2-number1');
    mainContentAboutMeContentText2Number1.innerHTML = "";
    var mainContentAboutMeContentText3Letter2 = document.getElementById('main-content-aboutMeContent-text3-letter2');
    mainContentAboutMeContentText3Letter2.innerHTML = "";
    var name = ["L", "e", "e", " ", "C", "a", "s", "h"];
    var age = ["1", "9"];
    var education = ["G", "r", "a", "d", "u", "a", "t", "e", "d"];
    for (var i = 0; i < name.length; i++) {
        mainContentAboutMeContentText1Letter1.innerHTML += "<spam class='main-content-aboutMeContent-text3-letter" + i + "-opacity0'>" + name[i] + "</spam>";
        console.log(name[i]);
    }
    for (var i = 0; i < age.length; i++) {
        mainContentAboutMeContentText2Number1.innerHTML += "<spam class='main-content-aboutMeContent-text3-letter" + i + "-opacity0'>" + age[i] + "</spam>";
        console.log(name[i]);
    }
    for (var i = 0; i < education.length; i++) {
        mainContentAboutMeContentText3Letter2.innerHTML += "<spam class='main-content-aboutMeContent-text3-letter" + i + "-opacity0'>" + education[i] + "</spam>";
        console.log(name[i]);
    }
  }
  // tab2 function
  function tab2function() {
    var mainContentWorkSamples = document.getElementById('main-content-workSamples');
    var mainContentWorkSamplesB1 = document.getElementById('main-content-workSamples-b1');
    var mainContentWorkSamplesB2 = document.getElementById('main-content-workSamples-b2');
    var mainContentWorkSamplesB3 = document.getElementById('main-content-workSamples-b3');
    var mainContentWorkSamplesB4 = document.getElementById('main-content-workSamples-b4');
    var mainContentWorkSamplesB5 = document.getElementById('main-content-workSamples-b5');
    var mainContentWorkSamplesB6 = document.getElementById('main-content-workSamples-b6');
    var mainContentWorkSamplesB7 = document.getElementById('main-content-workSamples-b7');
    var mainContentWorkSamplesB8 = document.getElementById('main-content-workSamples-bCh1');
    mainContentWorkSamplesB1.addEventListener("click", function() {
        var iframe = document.createElement("iframe");
        iframe.setAttribute("src", "https://www.youtube.com/embed/r-h2IPPMpBo?list=PL7vr_kFNXDB7JnTKGR6ZX_kqQGjUqeBQ7");
        iframe.style.position = "absolute";
        iframe.style.top = "18.6vh";
        iframe.style.left = "0vw";
        iframe.style.width = "68.6vw";
        iframe.style.height = "66.6vh";
        mainContentWorkSamples.appendChild(iframe);
    })
    mainContentWorkSamplesB2.addEventListener("click", function() {
        var iframe = document.createElement("iframe");
        iframe.setAttribute("src", "https://www.youtube.com/embed/bSdCY3ay8Qk?si=oYqbCSCG1mGvvJHq");
        iframe.style.position = "absolute";
        iframe.style.top = "18.6vh";
        iframe.style.left = "0vw";
        iframe.style.width = "68.6vw";
        iframe.style.height = "66.6vh";
        mainContentWorkSamples.appendChild(iframe);
    })
    mainContentWorkSamplesB3.addEventListener("click", function() {
        var iframe = document.createElement("iframe");
        iframe.setAttribute("src", "https://www.youtube.com/embed/_WRFMGZHrGs?si=dnKdbl2Izsi58Zg-");
        iframe.style.position = "absolute";
        iframe.style.top = "18.6vh";
        iframe.style.left = "0vw";
        iframe.style.width = "68.6vw";
        iframe.style.height = "66.6vh";
        mainContentWorkSamples.appendChild(iframe);
    })
    mainContentWorkSamplesB4.addEventListener("click", function() {
        var iframe = document.createElement("iframe");
        iframe.setAttribute("src", "https://www.youtube.com/embed/ryfU13Vkmls?si=etMo6sl_VNHCX2g2");
        iframe.style.position = "absolute";
        iframe.style.top = "18.6vh";
        iframe.style.left = "0vw";
        iframe.style.width = "68.6vw";
        iframe.style.height = "66.6vh";
        mainContentWorkSamples.appendChild(iframe);
    })
    mainContentWorkSamplesB5.addEventListener("click", function() {
        var iframe = document.createElement("iframe");
        iframe.setAttribute("src", "https://www.youtube.com/embed/s7Ih4r3CFsE?si=-4M_XEeRJlkSnCPG");
        iframe.style.position = "absolute";
        iframe.style.top = "18.6vh";
        iframe.style.left = "0vw";
        iframe.style.width = "68.6vw";
        iframe.style.height = "66.6vh";
        mainContentWorkSamples.appendChild(iframe);
    })
    mainContentWorkSamplesB6.addEventListener("click", function() {
        var iframe = document.createElement("iframe");
        iframe.setAttribute("src", "https://www.youtube.com/embed/L2SW84Q7L2I?si=6LtjayzBbDfoe7E5");
        iframe.style.position = "absolute";
        iframe.style.top = "18.6vh";
        iframe.style.left = "0vw";
        iframe.style.width = "68.6vw";
        iframe.style.height = "66.6vh";
        mainContentWorkSamples.appendChild(iframe);
    })
    mainContentWorkSamplesB7.addEventListener("click", function(e) {
        var iframe = document.createElement("iframe");
        iframe.setAttribute("src", "https://www.youtube.com/embed/H8eIcx-YAtE?si=GGAR0-2f4uLVPOvW");
        iframe.style.position = "absolute";
        iframe.style.top = "18.6vh";
        iframe.style.left = "0vw";
        iframe.style.width = "68.6vw";
        iframe.style.height = "66.6vh";
        mainContentWorkSamples.appendChild(iframe);
    });
  }