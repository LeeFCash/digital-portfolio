alert("some phones or tablets may not show this website properly");

var aboutCreaterToResume = document.getElementById("aboutCreater-toResume");
var resume = document.gotElementById("resume");

aboutCreaterToResume.addEventListener("click", () => {
    aboutCreaterToResume.setAttribute("id", "gone-animation");
    resume.setAttribute("id", "show-animation");
});