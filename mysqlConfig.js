var mysql      = require('mysql');
require('dotenv').config();

var connection = mysql.createConnection({
	host     : 'remotemysql.com',
	port	 :  3306,
	user     :  process.env.dbusername,
	password :  process.env.dbpassword,
	database :  process.env.database
});
connection.connect(function(err){
	if(!err) {
		console.log("Database is connected");
	} else {
		console.log("Error while connecting with database"+err);
	}
});
module.exports = connection; 
