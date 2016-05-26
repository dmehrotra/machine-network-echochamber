var url = location.hostname + location.pathname;
var timeIn =  new Date().timeNow();
var title = document.title;
var site = new Site(url,timeIn,title)

$(window).bind('beforeunload', function() {
   site.pushTimeOut(new Date().timeNow());
});



