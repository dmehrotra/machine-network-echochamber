function Site(url, timeIn,title){
	this.url = url;
	this.timeIn = timeIn;
	this.title = title;

}
Site.prototype.update = function(property){
	console.log('update');
}