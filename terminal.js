// warning to user 
alert('! WARNING ! this website might not work on a phone');
// call terminal div
var terminal = document.getElementById('terminal');
// prompt for user name
var user = window.prompt("What is your user name");
// user search terminal
var userInfo = document.getElementById('userInfo');
userInfo.innerHTML = user + '/ :';
// getting the search bar for rerminal
var terminalSearch = document.getElementById('terminalSearch');
// getting the help command prompt 
var comendHelp = document.getElementById('comendHelp');
// getting the ls command prompt
var listAll = document.getElementById('listAll');
//getting pcALL
var pcALL = document.getElementById('pcALL');
// getting main
var main = document.getElementById('main');
// getting chrome
var chrome = document.getElementById('chrome');
// getting aboutCreater
var aboutCreater = document.getElementById('aboutCreater');
// getting chromeSearch
var chromeSearch = document.getElementById('chromeSearch');
// getting closeMain
var closeMain = document.getElementById('closeMain');
// getting home1
var home1 = document.getElementById('home1');
// getting info
var info = document.getElementById('info');
// getting resume
var resume = document.getElementById('resume');
// getting terminal-infoHelp
var terminalInfoHelp = document.getElementById('terminal-infoHelp');
// getting terminal commands to work
 terminalSearch.addEventListener('input', function(){
  localStorage.terminalSearch = terminalSearch.value;
  //
  if(localStorage.terminalSearch == 'help') {
  terminal.appendChild(comendHelp);
  } else if(localStorage.terminalSearch == 'ls') {
    terminal.appendChild(listAll);
  } else if(localStorage.terminalSearch == 'clear') {
 comendHelp.remove();
 listAll.remove();
 aboutCreater.remove();
 terminalInfoHelp.remove();
  } else if(localStorage.terminalSearch == './pcALL.html') {
    document.body.appendChild(pcALL);
    terminal.remove();
} else if(localStorage.terminalSearch == 'aboutCreater'){
terminal.appendChild(aboutCreater);
} else {

}
})
// open resume
info.addEventListener('click', function(){
  terminal.remove();
  document.body.appendChild(resume);
})
//open chrome
chrome.addEventListener('click', function(){
pcALL.appendChild(main);
})
// return to terminal
home1.addEventListener('click', function(){
pcALL.remove();
document.body.appendChild(terminal);
})
// search in chrome working 
chromeSearch.addEventListener('input', function(){
localStorage.chromeSearch = chromeSearch.value;
if(localStorage.chromeSearch == 'youtube'){
alert('test');
} else {

}
})
// close Main
closeMain.addEventListener('click', function(){
main.remove();
})
 // keep at bottem
 resume.remove();
 main.remove();
 pcALL.remove();
 comendHelp.remove();
 listAll.remove();
 aboutCreater.remove();
// terminal refresh 
 
 setTimeout(terminalDown,60000,'');
 function terminalDown(){
 var i = 0;
 while(i == 0){
userInfo.remove();
terminalSearch.remove();
terminal.appendChild(userInfo);
terminal.appendChild(terminalSearch);
i++
 }
 var i = 0;
 setTimeout(terminalDown,60000,'');
 }
