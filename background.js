/*
// this script starts up when Chrome starts
// and runs in the background of Chrome, as opposed to being injected
// into every tab.
// it runs on a loop and every five minutes, it injects the file "spider.js"
// into the active tab.
*/

setInterval(function () {
  chrome.tabs.executeScript(null, {file: "spider.js"});
}, 1000*60*5);

//for real spookiness, change the timer to be random instead of 5 minutes
