
module.exports = function(req, res, app){
	setTimeout( function(){
		res.send(200, "wait for seconds");
	}  ,10000);
};
