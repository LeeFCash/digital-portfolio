//alert("some phones or tablets may not show this website properly");
var mainContentAboutMeContentText3Letters = document.getElementById("main-content-aboutMeContent-text3-letters");
var v = "soon to graduation";
var split = v.split("");
console.log(split);

for(let i = 0; i < split.length; i++){
    mainContentAboutMeContentText3Letters.innerHTML += "<span class=\"hello\">" + split[i] + "</span>";
}