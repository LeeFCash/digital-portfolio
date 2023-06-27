// .main-content-aboutMeContent
var tabWorkSamples = document.getElementById("main-tabBar-tab2");

tabWorkSamples.addEventListener("click", openTab);

function openTab() {
    var aboutMeTab = document.getElementById("main-tabBar-aboutMeTab");
    var acontactMeTab = document.getElementById("main-tabBar-contactMeTab");
    var aboutMeC = document.getElementById("main-content-aboutMeContent");
    if(aboutMeTab === null) {
        aboutMeTab.removeAttribute('id', 'main-tabBar-tab-select');
    }
    if(acontactMeTab === null) {
        acontactMeTab.removeAttribute('id', 'main-tabBar-tab-select');
    }
    aboutMeC.remove();
}