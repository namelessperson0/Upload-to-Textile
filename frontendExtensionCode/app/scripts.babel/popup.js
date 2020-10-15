'use strict';

console.log('\'Allo \'Allo! Popup');

searchUrbanDict = function(word){
    var query = word.selectionText;
    chrome.tabs.create({url: "http://www.urbandictionary.com/define.php?term=" + query});
  };
  
  chrome.contextMenus.create({
  title: "Add to Textile Bucket",
  contexts:["selection"],  // ContextType
  onclick: searchUrbanDict // A callback function
  });