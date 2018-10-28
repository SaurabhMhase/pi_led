const http = require('http');
const hostname = '0.0.0.0';
const port = 3000;

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

var Gpio = require('onoff').Gpio;


var timeout = 10000;







// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Stactic folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) =>{
	res.send(('Welcome to led blinking app'));
});

//Yellow Color
app.get('/yellow',(req,res) => {
	
	// e06 => GPIO 18 => yellow
	var yellowLED = new Gpio(18,'out');
	
	if(yellowLED.readSync() === 0){
		yellowLED.writeSync(1);
	}else{
		yellowLED.writeSync(0);	
	}

	setTimeout(function() {
		yellowLED.writeSync(0);
		yellowLED.unexport();
	},timeout);	

	res.send(('Yellow Color activated'));

});

//Red Color
app.get('/red',(req,res) => {
	// e05 => GPIO 15 => red
	var redLED = new Gpio(15,'out');
	
	if(redLED.readSync() === 0){
		redLED.writeSync(1);
	}else{
		redLED.writeSync(0);	
	}

	setTimeout(function() {
		redLED.writeSync(0);
		redLED.unexport();
	},timeout);	

	res.send(('Red Color activated'));

});

//White Color
app.get('/white',(req,res) => {
	
	// e04 => GPIO 16 => white
	var whiteLED = new Gpio(16,'out');
	
	if(whiteLED.readSync() === 0){
		whiteLED.writeSync(1);
	}else{
		whiteLED.writeSync(0);	
	}

	setTimeout(function() {
		whiteLED.writeSync(0);
		whiteLED.unexport();
	},timeout);	

	res.send(('White Color activated'));

});

//Green Color
app.get('/green',(req,res) => {
	// e19 => GPIO 20 => green
	var greenLED = new Gpio(20,'out');

	if(greenLED.readSync() === 0){
		greenLED.writeSync(1);
	}else{
		greenLED.writeSync(0);	
	}

	setTimeout(function() {
		greenLED.writeSync(0);
		greenLED.unexport();
	},timeout);	

	res.send(('Green  Color activated'));

});

// Blue Color
app.get('/blue',(req,res) => {
	// e20 => GPIO 21 => blue
	var blueLED = new Gpio(21,'out');
	
	if(blueLED.readSync() === 0){
		blueLED.writeSync(1);
	}else{
		blueLED.writeSync(0);	
	}

	setTimeout(function() {
		blueLED.writeSync(0);
		blueLED.unexport();
	},timeout);	

	res.send(('Blue Color activated'));
});


//const port = process.env.PORT || 5000;
app.listen(port, () =>{
    console.log(`Server started on port : ${port}`);
    // Same this as console.log("Server started at port"+port);
});

