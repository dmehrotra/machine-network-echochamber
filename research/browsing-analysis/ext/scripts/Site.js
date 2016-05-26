function Site(url, timeIn,title){
	this.url = url;
	this.timeIn = timeIn;
	this.title = title;
	this.timeOut;
}
Site.prototype.update = function(property){
	console.log('update');
}
Site.prototype.pushTimeOut = function(timestamp){
	this.timeOut = timestamp;
	this.push();

}
Site.prototype.push = function(){
	
	chrome.runtime.sendMessage({"message": "new_site", "site": this});
}