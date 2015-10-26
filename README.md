#Spooky Spiders

This is a basic Chrome Extension that will inject a gif of a crawling spider into the active Chrome tab every five minutes.

Read up on Chrome Extension basics here: [https://developer.chrome.com/extensions/getstarted](https://developer.chrome.com/extensions/getstarted)

## Manifest.json Key Explanation

###Background

These are the scripts that will run in the background. In this case it's necessary to maintain a timer that executes every five minutes. You can add html and css in here as well.

###Content Scripts

These scripts are injected into every chrome tab when they match the string provided in `matches`. In this case we're injecting some styling in a css file. The JS file is commented out but uncommenting it would result in the spider gif being placed on every page when it's loaded.

####Matches

This is a string that defines which URLs will get the content scripts injected into them. The current string is a catch-all for all domains, paths, and protocols. 

###Permissions

These are necesssary for script injection via `background.js`.

###Web\_Accessible\_Resources

This is necessary for pages outside the extension to load anyting other than content scripts, in this case, `spider.gif`. 

Forgetting to include this key will throw an error, which you can see in the console.
