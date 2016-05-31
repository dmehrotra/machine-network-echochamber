function Site(url, timeIn,title){
	this.url = url;
	this.timeIn = timeIn;
	this.title = title;
	this.timeOut;
	console.log(this.url)
}
Site.prototype.update = function(property){
	console.log('update');
}
Site.prototype.pushTimeOut = function(timestamp){
	this.timeOut = timestamp;
	this.push();
	console.log('new site');
}
Site.prototype.push = function(){
	
	chrome.runtime.sendMessage({"message": "new_site", "site": this});
}