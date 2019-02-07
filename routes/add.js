var data = require("../data.json");

exports.addFriend = function(req, res) { 
	var newFriend = req.params.userName;
	data.friends.push(newFriend);
	res.render('index', data);
 }