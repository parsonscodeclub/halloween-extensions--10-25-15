/*
/ this script takes the spider.gif file 
/ and appends it to whatever page this script is injected into.
*/

var gifElement = document.createElement("img");
//add a class that will be referenced in the CSS
gifElement.classList.add("spider-gif");
//you need to use Javascript to get the filepath, so Chrome knows that
//this is a file that is found inside this extension, 
//and not on whatever page this script is injected into.
//If you don't do this, it'll try and get the file from
// [webisteYouAreOn].com/spider.gif
gifElement.src = chrome.extension.getURL("spider.gif");;

//add the gif to the page.
var bod = document.getElementsByTagName('BODY')[0];
bod.appendChild(gifElement);

//after 4 seconds, remove the gif.
//this ensures that it will cross the screen once, instead of looping forever.
setTimeout(function () {
  document.getElementsByClassName('spider-gif')[0].remove();
}, 1000*4)
