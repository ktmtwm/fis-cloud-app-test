var domain = 'localhost'//'10.48.30.87',
	 port = '3459';
var url_ = 'http://'+domain+':'+port;

var url = url_+'/test/memoryLeak',
	        requestOption = {
	            url : url,
	            method : "GET",
	            // json : postBody,
	        };
var request = require('request');	 

request(requestOption, function(error, res, body){
	if(error){
		console.log("@@@@"+error)
		// expect(false).to.be.true;
	}
	else{ 
		console.log("---"+res.statusCode)
		console.log("###"+body)

		// if(res.statusCode == 500){
		// 	expect(body.toString()).to.contain("wait for seconds");
		// }else{
		// 	expect(false).to.be.true;
		// }
	}

});