var url = location.hostname + location.pathname + location.hash;
var timeIn =  new Date().timeNow();
var title = document.title;
var s = new Site(url,timeIn,title)
$(window).bind('beforeunload', function() {
   s.pushTimeOut(new Date().timeNow());
});

if (s.url.search("facebook") != -1){
	console.log('facebook-detected')
	$(document).on("click",function(){
		setTimeout(checkUrl(s),1000);
	})
}
if (s.url.search("google") != -1){
	console.log('google-detected')
	$(document).on("click",function(){
		setTimeout(checkHash(s),1000);
	})
}



