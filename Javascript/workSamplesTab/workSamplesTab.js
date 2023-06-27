// .main-content-aboutMeContent
var tabWorkSamples = document.getElementById("main-tabBar-tab2");

tabWorkSamples.addEventListener("click", openTab);

function openTab() {
    var aboutMe = document.getElementById("main-content-aboutMeContent");
    aboutMe.remove();
}