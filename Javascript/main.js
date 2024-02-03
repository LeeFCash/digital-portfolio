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
    tab3function();
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
    var mainContentWorkSamplesBCh1 = document.getElementById('main-content-workSamples-bCh1');
    var mainContentWorkSamplesImg = document.getElementById('main-content-workSamples-img');
    var toChannel = document.getElementById('main-content-workSamples-toChannel');
    var playList = document.getElementById('main-content-workSamples-playList');
    var yourChannel = document.getElementById('main-content-workSamples-yourChannel');
    mainContentWorkSamplesB1.addEventListener("click", function() {
        var iframe = document.createElement("iframe");
        iframe.setAttribute("src", "https://www.youtube.com/embed/r-h2IPPMpBo?list=PL7vr_kFNXDB7JnTKGR6ZX_kqQGjUqeBQ7");
        iframe.style.position = "absolute";
        iframe.style.top = "18.6vh";
        iframe.style.left = "0vw";
        iframe.style.width = "68.6vw";
        iframe.style.height = "79.1vh";
        mainContentWorkSamples.appendChild(iframe);
        var backArrow = document.getElementById('main-content-workSamples-backArrow');
        backArrow.addEventListener('click', function() {
            iframe.remove();
        })
    })
    mainContentWorkSamplesB2.addEventListener("click", function() {
        var iframe = document.createElement("iframe");
        iframe.setAttribute("src", "https://www.youtube.com/embed/bSdCY3ay8Qk?si=oYqbCSCG1mGvvJHq");
        iframe.style.position = "absolute";
        iframe.style.top = "18.6vh";
        iframe.style.left = "0vw";
        iframe.style.width = "68.6vw";
        iframe.style.height = "79.1vh";
        mainContentWorkSamples.appendChild(iframe);
        var backArrow = document.getElementById('main-content-workSamples-backArrow');
        backArrow.addEventListener('click', function() {
            iframe.remove();
        })
    })
    mainContentWorkSamplesB3.addEventListener("click", function() {
        var iframe = document.createElement("iframe");
        iframe.setAttribute("src", "https://www.youtube.com/embed/_WRFMGZHrGs?si=dnKdbl2Izsi58Zg-");
        iframe.style.position = "absolute";
        iframe.style.top = "18.6vh";
        iframe.style.left = "0vw";
        iframe.style.width = "68.6vw";
        iframe.style.height = "79.1vh";
        mainContentWorkSamples.appendChild(iframe);
        var backArrow = document.getElementById('main-content-workSamples-backArrow');
        backArrow.addEventListener('click', function() {
            iframe.remove();
        })
    })
    mainContentWorkSamplesB4.addEventListener("click", function() {
        var iframe = document.createElement("iframe");
        iframe.setAttribute("src", "https://www.youtube.com/embed/ryfU13Vkmls?si=etMo6sl_VNHCX2g2");
        iframe.style.position = "absolute";
        iframe.style.top = "18.6vh";
        iframe.style.left = "0vw";
        iframe.style.width = "68.6vw";
        iframe.style.height = "79.1vh";
        mainContentWorkSamples.appendChild(iframe);
        var backArrow = document.getElementById('main-content-workSamples-backArrow');
        backArrow.addEventListener('click', function() {
            iframe.remove();
        })
    })
    mainContentWorkSamplesB5.addEventListener("click", function() {
        var iframe = document.createElement("iframe");
        iframe.setAttribute("src", "https://www.youtube.com/embed/s7Ih4r3CFsE?si=-4M_XEeRJlkSnCPG");
        iframe.style.position = "absolute";
        iframe.style.top = "18.6vh";
        iframe.style.left = "0vw";
        iframe.style.width = "68.6vw";
        iframe.style.height = "79.1vh";
        mainContentWorkSamples.appendChild(iframe);
        var backArrow = document.getElementById('main-content-workSamples-backArrow');
        backArrow.addEventListener('click', function() {
            iframe.remove();
        })
    })
    mainContentWorkSamplesB6.addEventListener("click", function() {
        var iframe = document.createElement("iframe");
        iframe.setAttribute("src", "https://www.youtube.com/embed/L2SW84Q7L2I?si=6LtjayzBbDfoe7E5");
        iframe.style.position = "absolute";
        iframe.style.top = "18.6vh";
        iframe.style.left = "0vw";
        iframe.style.width = "68.6vw";
        iframe.style.height = "79.1vh";
        mainContentWorkSamples.appendChild(iframe);
    })
    mainContentWorkSamplesB7.addEventListener("click", function(e) {
        var iframe = document.createElement("iframe");
        iframe.setAttribute("src", "https://www.youtube.com/embed/H8eIcx-YAtE?si=GGAR0-2f4uLVPOvW");
        iframe.style.position = "absolute";
        iframe.style.top = "18.6vh";
        iframe.style.left = "0vw";
        iframe.style.width = "68.6vw";
        iframe.style.height = "79.1vh";
        mainContentWorkSamples.appendChild(iframe);
        var backArrow = document.getElementById('main-content-workSamples-backArrow');
        backArrow.addEventListener('click', function() {
            iframe.remove();
        })
    });
    mainContentWorkSamplesBCh1.addEventListener('click', function() {
        mainContentWorkSamplesImg.setAttribute('src', './IMG/myB2.png');
        yourChannel.classList.toggle('yourChannel');
    });
    yourChannel.addEventListener('click', function() {
        yourChannel.classList.toggle('yourChannel');
        mainContentWorkSamplesB1.classList.toggle('main-content-workSamples-b1');
        mainContentWorkSamplesB2.classList.toggle('main-content-workSamples-b2');
        mainContentWorkSamplesB3.classList.toggle('main-content-workSamples-b3');
        mainContentWorkSamplesB4.classList.toggle('main-content-workSamples-b4');
        mainContentWorkSamplesB5.classList.toggle('main-content-workSamples-b5');
        mainContentWorkSamplesB6.classList.toggle('main-content-workSamples-b6');
        mainContentWorkSamplesB7.classList.toggle('main-content-workSamples-b7');
        mainContentWorkSamplesImg.setAttribute('src', './IMG/myCh.png');
        playList.classList.toggle('main-content-workSamples-playList');
        toChannel.style.top = '26vh';
        toChannel.style.left = '15vw';
        toChannel.style.width = '5.1vw';
        toChannel.style.height = '11vh';
    });
    playList.addEventListener('click', function() {
        mainContentWorkSamplesImg.setAttribute('src', './IMG/myBlog.png');
        mainContentWorkSamplesB1.classList.toggle('main-content-workSamples-b1');
        mainContentWorkSamplesB2.classList.toggle('main-content-workSamples-b2');
        mainContentWorkSamplesB3.classList.toggle('main-content-workSamples-b3');
        mainContentWorkSamplesB4.classList.toggle('main-content-workSamples-b4');
        mainContentWorkSamplesB5.classList.toggle('main-content-workSamples-b5');
        mainContentWorkSamplesB6.classList.toggle('main-content-workSamples-b6');
        mainContentWorkSamplesB7.classList.toggle('main-content-workSamples-b7');
        playList.classList.toggle('main-content-workSamples-playList');
        toChannel.style.top = '56.3vh';
        toChannel.style.left = '10.3vw';
        toChannel.style.width = '1.5vw';
        toChannel.style.height = '3vh';
    });
    var toChannel = document.getElementById('main-content-workSamples-toChannel');
    toChannel.addEventListener('click', function() {
        window.open("https://www.youtube.com/@codeShowCase/featured");
    });
  }
  function tab3function() {
    var textDiv1 = document.getElementById('main-content-contactMe-text-div1');
    var textDiv2 = document.getElementById('main-content-contactMe-text-div2');
    textDiv1.innerHTML = "";
    textDiv2.innerHTML = "";
    var text = ['T', 'o', ' ', 'c', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e', ',', ' ', 'y', 'o', 'u', ' ', 'c', 'a', 'n', ' ', 'e', 'm', 'a', 'i', 'l'];
    var text2 = ['a', 'n', 'd', ' ', 't', 'o', ' ', 't', 'h', 'e', ' ', 'r', 'i', 'g', 'h', 't', ',', ' ', 'y', 'o', 'u', ' ', 'c', 'a', 'n', ' ', 'c', 'l', 'i', 'c', 'k', ' ', 'C', 'o', 'm', 'p', 'o', 's', 's', ' ', 't', 'o', ' ', 'e', 'm', 'a', 'i', 'l', ' ', 'm', 'e', '.'];
    for(var i = 0; i <= text.length - 1; i++) {
        textDiv1.style.color = 'white';
        textDiv1.innerHTML += '<span class="textDiv' + i + '">' + text[i] + '</span>';
    }
  for(var i = 0; i <= text2.length - 1; i++) {
    textDiv2.style.color = 'white';
    textDiv2.innerHTML += '<span class="textDiv' + i + '">' + text2[i] + '</span>';
  }
  var composs = document.getElementById('composs');
  composs.setAttribute('class', 'composs');
  composs.addEventListener('click', function() {
    window.open("https://mail.google.com/mail/u/0/#inbox?compose=new");
  });
  }