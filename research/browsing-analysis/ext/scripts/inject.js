
var url = location.hostname + location.pathname;
var timeIn =  new Date().timeNow();
var title = document.title;

var site = new Site(url,timeIn,title)



chrome.runtime.sendMessage({"message": "new_site", "site": site});

