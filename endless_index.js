// var a = require('./lib/waitForSeconds.js');
var domain = '10.48.30.87',
	 port = '8889';
var url_ = 'http://'+domain+':'+port;
var request = require('request');

var url = url_+'/test/waitForSeconds',
	requestOption = {
	    url : url,
	    method : "GET",
	    // json : postBody,
	};

for(var i=0; i<1000; i++){
	request(requestOption, function(error, res, body){
		if(error){
			console.log("@@@@"+error)
			// expect(false).to.be.true;
		}
		else{

			console.log("---"+res.statusCode)
			console.log("###"+body)

			// if(res.statusCode == 500){
			// 	expect(body.toString()).to.contain("Oops, there was a problem!\nunable to load plugin");
			// }else{
			// 	expect(false).to.be.true;
			// }
		}

	});

};
