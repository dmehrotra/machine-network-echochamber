Date.prototype.today = function () { 
    return ((this.getDate() < 10)?"0":"") + this.getDate() +"/"+(((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) +"/"+ this.getFullYear();
}
Date.prototype.timeNow = function () {
     return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes() +":"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds();
}

var checkUrl = function(site){
	console.log('checking url')
	console.log(site.url + "---" + window.location.hostname + window.location.pathname )

	if (site.url != window.location.hostname + window.location.pathname){
		site.pushTimeOut(new Date().timeNow());
		s = beginSession();
	}
}
var checkHash = function(site){
	console.log('checking url')
	console.log(site.url + "---" + window.location.hostname + window.location.pathname )

	if (site.url != window.location.hostname + window.location.pathname + window.location.hash){
		site.pushTimeOut(new Date().timeNow());
		s = beginSession();
	}
}

var beginSession = function(){
	url = location.hostname + location.pathname + location.hash;
	timeIn =  new Date().timeNow();
	title = document.title;
	return new Site(url,timeIn,title)
}