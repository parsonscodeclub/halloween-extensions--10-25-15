var imgURL = chrome.extension.getURL("spider.gif");
var gifElement = document.createElement("img");
gifElement.classList.add("spider-gif");
gifElement.src = imgURL;
var bod = document.getElementsByTagName('BODY')[0];
console.log('ran once!');
bod.appendChild(gifElement);

setTimeout(function () {
  console.log('removed!');
  document.getElementsByClassName('spider-gif')[0].remove();
}, 1000*4) //10 seconds from now