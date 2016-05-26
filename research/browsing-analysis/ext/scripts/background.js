chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		console.log(request.site.url + " " + request.site.timeIn + " " + request.site.timeOut)
		$.ajax({
			url: "http://127.0.0.1:5000/sites",
			type: 'POST',
			dataType: 'json',
			contentType: 'application/json',
			data: JSON.stringify([{"url": request.site.url, "timeIn": request.site.timeIn, "title": request.site.title}]),
			success: function (data) {
			alert(JSON.stringify(data));
			},
			error: function(e){
			debugger;
			alert("Cannot get data");
			}
		})
 	}
 );