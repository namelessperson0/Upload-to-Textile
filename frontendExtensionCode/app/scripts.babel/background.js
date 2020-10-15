'use strict';

chrome.runtime.onInstalled.addListener(details => {
  console.log('previousVersion', details.previousVersion);
});

chrome.browserAction.setBadgeText({text: '\'Allo'});

console.log('\'Allo \'Allo! Event Page for Browser Action');

searchUrbanDict = function(word){
  var query = word.selectionText;
  chrome.tabs.create({url: "http://www.urbandictionary.com/define.php?term=" + query});
};

chrome.contextMenus.create({
title: "Add to Textile Bucket",
contexts:["selection"],  // ContextType
onclick: searchUrbanDict // A callback function
});