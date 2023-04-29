//alert("some phones or tablets may not show this website properly");
var mainContentAboutMeContentText3Letter1 = document.getElementById("main-content-aboutMeContent-text3-letter1");
//var g = mainContentAboutMeContentText3Letter1;
var tests = "soon to graduation";
//var s = mainContentAboutMeContentText3Letter1.textContent;
//var s = test.textContent;
var split = tests.split("");
console.log(split);

for(var i = 0; i < split.length; i++){
    mainContentAboutMeContentText3Letter1.innerHTML = "<span>" + split[i] + "</span>";
}