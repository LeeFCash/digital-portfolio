startPage();
//aboutMeAgeNumbers();
//aboutMeEducationLetters();
//aboutMeNameLetters();
// get tabs and close 
function startPage() {
    var startPage = document.getElementById('main-content-startPage');
    var aboutMeContent = document.getElementById('main-content-aboutMeContent');
    var workSamples = document.getElementById('main-content-workSamples');
    var contactMe = document.getElementById('main-content-contactMe');
    aboutMeContent.remove();
    workSamples.remove();
    contactMe.remove();
}
//tab code
var tabWorkSamples = document.getElementById("main-tabBar-tab2");

tabWorkSamples.addEventListener("click", openTab2);
//functions 
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
    /* old tab2 code
    function openTab2() {
    var aboutMeC = document.getElementById("main-content-aboutMeContent");
    var mainContent = document.getElementById("main-content");
    var tabID = document.getElementById("main-tabBar-tab-select");
    tabID.removeAttribute("id");
    tabWorkSamples.style.backgroundColor = "black";
    tabWorkSamples.style.color = "white";
    aboutMeC.remove();
    var mainContentWorkSemplesContent = document.createElement("div");
    mainContent.appendChild(mainContentWorkSemplesContent);
    var myCh = document.createElement("img");
        //myCh.style.width = "70%";
        //myCh.style.height = "90%";
        mainContentWorkSemplesContent.appendChild(myCh);
        myCh.setAttribute("src", "IMG/myBlog.png");
        myCh.setAttribute("alt", "Not working");
        myCh.setAttribute("class", "main-content-mainContentWorkSemplesContent-myBlogIMG");
        var myChB = document.createElement("button");
        myChB.style.backgroundColor = "white";
        myChB.style.position = "absolute";
        myChB.style.height = "3%";
        myChB.style.width = "2%";
        myChB.style.left = "67%";
        myChB.style.top = "20%";
        mainContentWorkSemplesContent.appendChild(myChB);
        var myChBN1 = document.createElement("button");
        myChBN1.style.backgroundColor = "white";
        myChBN1.style.position = "absolute";
        myChBN1.style.height = "7%";
        myChBN1.style.width = "30%";
        myChBN1.style.left = "24%";
        myChBN1.style.top = "29.8%";
        mainContentWorkSemplesContent.appendChild(myChBN1);
        myChBN1.addEventListener("click", function(){
            var iframe = document.createElement("iframe");
            iframe.setAttribute("src", "https://www.youtube.com/embed/r-h2IPPMpBo?list=PL7vr_kFNXDB7JnTKGR6ZX_kqQGjUqeBQ7");
            iframe.style.height = "80%";
            iframe.style.width = "69.9%";
            iframe.style.position = "absolute";
            iframe.style.right = "29.9%";
            iframe.style.top = "17%";
            mainContentWorkSemplesContent.appendChild(iframe);
            var ExitVideo = document.createElement("button");
            ExitVideo.style.height = "2%";
            ExitVideo.style.width = "1%";
            ExitVideo.style.position = "absolute";
            ExitVideo.style.left = "8%";
            ExitVideo.style.top = "12%";
            mainContentWorkSemplesContent.appendChild(ExitVideo)
            ExitVideo.addEventListener("click", function(){
                iframe.remove();
                ExitVideo.remove();
            });
        });
        var myChBN2 = document.createElement("button");
        myChBN2.style.backgroundColor = "white";
        myChBN2.style.position = "absolute";
        myChBN2.style.height = "7%";
        myChBN2.style.width = "30%";
        myChBN2.style.left = "24%";
        myChBN2.style.top = "36.9%";
        mainContentWorkSemplesContent.appendChild(myChBN2);
        myChBN2.addEventListener("click", function(){
            var iframe = document.createElement("iframe");
            iframe.setAttribute("src", "https://www.youtube.com/embed/bSdCY3ay8Qk?si=oYqbCSCG1mGvvJHq");
            iframe.style.height = "80%";
            iframe.style.width = "69.9%";
            iframe.style.position = "absolute";
            iframe.style.right = "29.9%";
            iframe.style.top = "17%";
            mainContentWorkSemplesContent.appendChild(iframe);
            var ExitVideo = document.createElement("button");
            ExitVideo.style.height = "2%";
            ExitVideo.style.width = "1%";
            ExitVideo.style.position = "absolute";
            ExitVideo.style.left = "8%";
            ExitVideo.style.top = "12%";
            mainContentWorkSemplesContent.appendChild(ExitVideo)
            ExitVideo.addEventListener("click", function(){
                iframe.remove();
                ExitVideo.remove();
            });
        });
        var myChBN3 = document.createElement("button");
        myChBN3.style.backgroundColor = "white";
        myChBN3.style.position = "absolute";
        myChBN3.style.height = "7%";
        myChBN3.style.width = "30%";
        myChBN3.style.left = "24%";
        myChBN3.style.top = "44.9%";
        mainContentWorkSemplesContent.appendChild(myChBN3);
        myChBN3.addEventListener("click", function(){
            var iframe = document.createElement("iframe");
            iframe.setAttribute("src", "https://www.youtube.com/embed/_WRFMGZHrGs?si=dnKdbl2Izsi58Zg-");
            iframe.style.height = "80%";
            iframe.style.width = "69.9%";
            iframe.style.position = "absolute";
            iframe.style.right = "29.9%";
            iframe.style.top = "17%";
            mainContentWorkSemplesContent.appendChild(iframe);
            var ExitVideo = document.createElement("button");
            ExitVideo.style.height = "2%";
            ExitVideo.style.width = "1%";
            ExitVideo.style.position = "absolute";
            ExitVideo.style.left = "8%";
            ExitVideo.style.top = "12%";
            mainContentWorkSemplesContent.appendChild(ExitVideo)
            ExitVideo.addEventListener("click", function(){
                iframe.remove();
                ExitVideo.remove();
            });
        });
        var myChBN4 = document.createElement("button");
        myChBN4.style.backgroundColor = "white";
        myChBN4.style.position = "absolute";
        myChBN4.style.height = "7%";
        myChBN4.style.width = "30%";
        myChBN4.style.left = "24%";
        myChBN4.style.top = "52.9%";
        mainContentWorkSemplesContent.appendChild(myChBN4);
        myChBN4.addEventListener("click", function(){
            var iframe = document.createElement("iframe");
            iframe.setAttribute("src", "https://www.youtube.com/embed/ryfU13Vkmls?si=etMo6sl_VNHCX2g2");
            iframe.style.height = "80%";
            iframe.style.width = "69.9%";
            iframe.style.position = "absolute";
            iframe.style.right = "29.9%";
            iframe.style.top = "17%";
            mainContentWorkSemplesContent.appendChild(iframe);
            var ExitVideo = document.createElement("button");
            ExitVideo.style.height = "2%";
            ExitVideo.style.width = "1%";
            ExitVideo.style.position = "absolute";
            ExitVideo.style.left = "8%";
            ExitVideo.style.top = "12%";
            mainContentWorkSemplesContent.appendChild(ExitVideo)
            ExitVideo.addEventListener("click", function(){
                iframe.remove();
                ExitVideo.remove();
            });
        });
        var myChBN5 = document.createElement("button");
        myChBN5.style.backgroundColor = "white";
        myChBN5.style.position = "absolute";
        myChBN5.style.height = "7%";
        myChBN5.style.width = "30%";
        myChBN5.style.left = "24%";
        myChBN5.style.top = "60.8%";
        mainContentWorkSemplesContent.appendChild(myChBN5);
        myChBN5.addEventListener("click", function(){
            var iframe = document.createElement("iframe");
            iframe.setAttribute("src", "https://www.youtube.com/embed/s7Ih4r3CFsE?si=-4M_XEeRJlkSnCPG");
            iframe.style.height = "80%";
            iframe.style.width = "69.9%";
            iframe.style.position = "absolute";
            iframe.style.right = "29.9%";
            iframe.style.top = "17%";
            mainContentWorkSemplesContent.appendChild(iframe);
            var ExitVideo = document.createElement("button");
            ExitVideo.style.height = "2%";
            ExitVideo.style.width = "1%";
            ExitVideo.style.position = "absolute";
            ExitVideo.style.left = "8%";
            ExitVideo.style.top = "12%";
            mainContentWorkSemplesContent.appendChild(ExitVideo)
            ExitVideo.addEventListener("click", function(){
                iframe.remove();
                ExitVideo.remove();
            });
        });
        var myChBN6 = document.createElement("button");
        myChBN6.style.backgroundColor = "white";
        myChBN6.style.position = "absolute";
        myChBN6.style.height = "7%";
        myChBN6.style.width = "30%";
        myChBN6.style.left = "24%";
        myChBN6.style.top = "68.7%";
        mainContentWorkSemplesContent.appendChild(myChBN6);
        myChBN6.addEventListener("click", function(){
            var iframe = document.createElement("iframe");
            iframe.setAttribute("src", "https://www.youtube.com/embed/L2SW84Q7L2I?si=6LtjayzBbDfoe7E5");
            iframe.style.height = "80%";
            iframe.style.width = "69.9%";
            iframe.style.position = "absolute";
            iframe.style.right = "29.9%";
            iframe.style.top = "17%";
            mainContentWorkSemplesContent.appendChild(iframe);
            var ExitVideo = document.createElement("button");
            ExitVideo.style.height = "2%";
            ExitVideo.style.width = "1%";
            ExitVideo.style.position = "absolute";
            ExitVideo.style.left = "8%";
            ExitVideo.style.top = "12%";
            mainContentWorkSemplesContent.appendChild(ExitVideo)
            ExitVideo.addEventListener("click", function(){
                iframe.remove();
                ExitVideo.remove();
            });
        });
        var myChBN7 = document.createElement("button");
        myChBN7.style.backgroundColor = "white";
        myChBN7.style.position = "absolute";
        myChBN7.style.height = "7%";
        myChBN7.style.width = "30%";
        myChBN7.style.left = "24%";
        myChBN7.style.top = "76.5%";
        mainContentWorkSemplesContent.appendChild(myChBN7);
        myChBN7.addEventListener("click", function(){
            var iframe = document.createElement("iframe");
            iframe.setAttribute("src", "https://www.youtube.com/embed/H8eIcx-YAtE?si=GGAR0-2f4uLVPOvW");
            iframe.style.height = "80%";
            iframe.style.width = "69.9%";
            iframe.style.position = "absolute";
            iframe.style.right = "29.9%";
            iframe.style.top = "17%";
            mainContentWorkSemplesContent.appendChild(iframe);
            var ExitVideo = document.createElement("button");
            ExitVideo.style.height = "2%";
            ExitVideo.style.width = "1%";
            ExitVideo.style.position = "absolute";
            ExitVideo.style.left = "8%";
            ExitVideo.style.top = "12%";
            mainContentWorkSemplesContent.appendChild(ExitVideo)
            ExitVideo.addEventListener("click", function(){
                iframe.remove();
                ExitVideo.remove();
            });
        });
        var myChBN = 0;
        myChB.addEventListener("click", function(){
            if(myChBN === 0){
                myChB.style.left = "58%";
                myChB.style.top = "32%";
                myChB.style.height = "3%";
                myChB.style.width = "10%";
                myCh.setAttribute("src", "IMG/myB2.png");
                myChBN = 1;
            } else {if(myChBN === 1){
                myChB.style.left = "28%";
                myChB.style.top = "36%";
                myChB.style.height = "3%";
                myChB.style.width = "5%";
                myCh.setAttribute("src", "IMG/myCh.png");
                myChBN = 2;
            } else {if(myChBN === 2){
                myChB.style.left = "58%";
                myChB.style.top = "32%";
                myChB.style.height = "3%";
                myChB.style.width = "10%";
                myCh.setAttribute("src", "IMG/myB2.png");
                myChBN = 1;
            }
            }
        }
        });
        
    }
    */
