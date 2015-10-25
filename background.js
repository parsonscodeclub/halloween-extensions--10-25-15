// setTimeout(function() {
//   chrome.tabs.executeScript(null, {file: "spider.js"});
// }, 1000*5);

setInterval(function () {
  console.log('on a loop');
  chrome.tabs.executeScript(null, {file: "spider.js"});
}, 1000*5*60); //every five minutes;