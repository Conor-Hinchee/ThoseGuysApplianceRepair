const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const mailer = require('nodemailer'); 
const dotenv = require('dotenv');


const port = process.env.PORT || 8081;
const app = express();


app.use(favicon(__dirname + '/build/favicon.ico'));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/send-message', function(req, res){
	const receivedQuery = req.query;
	// const transporter = mailer.createTransport({
 //       host: "smtp.gmail.com",
 //       port: 465,
 //       secure: true,
 //       auth: {
 //           type: "OAuth2",
 //           user: 'thoseguys.sms.sender@gmail.com',
 //           clientId: '878599298291-2reekvf6k03kh2sitciss46nmtpgq1re.apps.googleusercontent.com',
 //           clientSecret: process.env.GMAIL_SECRET,
 //           refreshToken: '1/ZQA-LPr8G90xDP1EO4ym2WvVXf8sJhwiqND69CGV5uNJfUf30yGb_IK42TT8C87y'
 //       }
 //   });
	
	let message = "Bryan, My name is "; 
	console.log(message);
	if(!receivedQuery.type){
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
 
	console.log(message);
 //   const mailOptions = {
 //       from: '"Web Page Contact" thoseguys.sms.sender@gmail.com',
 //       to: '17405860028.15757428441.gPLxrlk-cz@txt.voice.google.com',
 //       subject: 'Contact Request',
 //       html: message
	// };
	
 //   transporter.sendMail(mailOptions, function(error, info){
 //       if (error) {
 //           console.log("error sending mail :" + error);
 //           res.statusCode = 303;
 //           res.redirect('/error');
 //       } else {
 //           console.log('Email sent: ' + info.response);
 //           res.statusCode = 303;
 //           res.redirect('/thankyou');
 //       }
 //   });
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(port, 'localhost');