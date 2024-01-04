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
    aboutMeNAE();
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
