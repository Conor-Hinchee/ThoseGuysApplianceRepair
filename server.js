const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();


app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/send-message', function(req, res){
    const receivedQuery = req.query; 
	
	
	console.log(receivedQuery);
	
	let message = "Bryan, My name is "; 
	
	if(!receivedQuery.type){
		res.statusCode = 303;
		res.send("No type assigned");
	}
	
	
	if(receivedQuery.type === "sales"){
		message += receivedQuery.name + " I am looking to buy " + 
			receivedQuery.appliance + " contact me at " +
			receivedQuery.phone + " I live at " + receivedQuery.address;
			
		res.send(message);	
	}
	
	if(receivedQuery.type === "repair"){
		message += receivedQuery.name + "I am having issues with my " + 
			receivedQuery.appliance + " contact me at " +
			receivedQuery.phone + " I live at " + receivedQuery.address;
			
		res.send(message);
	}
	
	if(receivedQuery.type === "painting"){
		message += receivedQuery.name + "I am interested in you refinishing my an appliance" + 
			" contact me at " + receivedQuery.phone + " I live at " + 
			receivedQuery.address;
			
		res.send(message);
	}
	
	if(receivedQuery.type === "recycle"){
		message += receivedQuery.name + "I am interested in you recycle my an appliance('s)" + 
			" contact me at " + receivedQuery.phone + " I live at " + 
			receivedQuery.address;
			
		res.send(message);
	}
	

});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(port);