// .main-content-aboutMeContent
var tabWorkSamples = document.getElementById("main-tabBar-tab2");

tabWorkSamples.addEventListener("click", openTab);

function openTab() {
    var aboutMeTab = document.getElementById("main-tabBar-aboutMeTab");
    console.log(typeof(aboutMeTab));
    //var contactMeTab = document.getElementById("main-tabBar-contactMeTab");
    var aboutMeC = document.getElementById("main-content-aboutMeContent");
    var mainContent = document.getElementById("main-content");
    var mainTabBarList = document.getElementById("main-tabBar-list");
    var mainContentWorkSemplesContent = document.createElement("div");
    //var aboutMeTabRemove = mainTabBarList.querySelectorAll('button')[0];
    var tab1 = document.createElement("button");
    tab1.innerHTML = "About me";
    tab1.setAttribute("class", "main-tabBar-tab1");
    //tabWorkSamples.setAttribute("id", "main-tabBar-tab-select");
    //mainTabBarList.removeChild(aboutMeTab);
    aboutMeTab.remove();
    //contactMeTab.remove();
    aboutMeC.remove();
    mainTabBarList.appendChild(tab1);
    mainContentWorkSemplesContent.setAttribute("class", "main-content-WorkSemplesContent");
    mainContent.appendChild(mainContentWorkSemplesContent);
}